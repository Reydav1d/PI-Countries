const { Activity } = require("../db.js");

const getActivities = async (req, res) => {
    try {
        const allActivities = await Activity.findAll();
        if (!allActivities.length) res.status(200).send("No hay actividades aún");
        else res.status(200).json(allActivities);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { getActivities }