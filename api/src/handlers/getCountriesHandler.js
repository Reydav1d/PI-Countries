const { Op } = require("sequelize");
const { Country, Activity } = require("../db.js");

const getCountries = async (req, res) => {
    const { name } = req.query;
    try {
        if (!name) {
            const allCountries = await Country.findAll({
                include: Activity,
            });
            return res.status(200).json(allCountries);
        } else {
            const country = await Country.findAll({
                where: { name: { [Op.iLike]: `%${name}%` } },
            });
            if (!country)
                return res
                    .status(404)
                    .json({ error: "No se encontró el país o no existe" });
            return res.status(200).json(country);
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { getCountries }