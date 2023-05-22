const { Country } = require("../db.js");

const postActivities = async (req, res) => {
    const { id, name, difficulty, duration, season, countries } = req.body;

    try {
        const activity = await Activity.create({
            id,
            name,
            difficulty,
            duration,
            season,
        });

        const activitiesToAdd = await Country.findAll({
            where: { name: countries },
        });
        await activity.addCountry(activitiesToAdd);

        res.status(200).send("Posteo exitoso");
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { postActivities }