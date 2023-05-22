const { Country, Activity } = require("../db.js");

const getCountriesById = async (req, res) => {
    const { id } = req.params;
    try {
        const idCountry = id.toUpperCase();
        const country = await Country.findOne({
            where: { id: idCountry },
            include: Activity,
        });
        if (country) return res.status(200).json(country);
        else return res.status(404).send("No existe país con ese identificador");
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { getCountriesById }