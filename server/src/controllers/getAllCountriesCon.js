const axios=require('axios');
const {Country}=require('../db.js');

    const getAllCountriesCon =async() => {
        const {data} = await axios.get('http://localhost:5000/countries');
        const countries =  data.map(country => {
            return {
                id: country.cca3,
                name: country.name.common,
                flags: country.flags.svg,
                continent: country.continents[0],
                capital: country.capital ? country.capital[0] : 'capital no encontrada',
                subregion: country.subregion ?  country.subregion : 'subregion no encontrada',
                area: country.area,
                population: country.population,
            };
        })
    const dbCreate= await Country.bulkCreate(countries);
    return dbCreate;
}

module.exports=getAllCountriesCon;