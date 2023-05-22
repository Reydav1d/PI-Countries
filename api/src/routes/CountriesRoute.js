const { Router } = require("express");
const CountriesRouter = Router();
const {getCountries} = require('../handlers/getCountriesHandler')
const {getCountriesByID} = require('../handlers/countriesByIdHandler.js')

CountriesRouter.get("/", getCountries);
CountriesRouter.get("/:id", getCountriesByID)

module.exports = CountriesRouter;