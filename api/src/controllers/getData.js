const axios = require('axios');
const Country = require ('../src/db.js');

const getData = async()=>{
    let countries = await axios.get("https://restcountries.com/v3.1/all");
    await countries.data.map((country)=> {
        let pais ={
        id: country.cca2,
        name: country.name.common,
        image: country.flags[1],
        continent: country.continents[0],
        capital: country.capital ? country.capital[0] : "Sin capital",
        subregion: country.subregion ? country.subregion[0] : "Sin región",
        area: country.area,
        population: country.population,
        };
        Country.findOrCreate({where: pais})
    })
}

module.exports = getData;