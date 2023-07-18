const axios=require('axios');
const {Country}=require('../db.js');

// *Traigo todos los paises de la api(local)
    const getAllCountriesCon =async() => {
        const {data} = await axios.get('http://localhost:5000/countries');
        let countries = await Promise.all(
            data.map(async(element)=>{
                const country = {
                    id: element.cca3,
                    name: element.name.common,
                    flags: element.flags.svg,
                    continent: element.continents[0],
                    capital: element.capital ? element.capital[0] : 'capital no encontrada',
                    subregion: element.subregion ?  element.subregion : 'subregion no encontrada',
                    area: element.area,
                    population: element.population,
                }
    
                await Country.findOrCreate({
                    where:{
                        id: element.cca3,
                        name: element.name.common,
                        flags: element.flags.svg,
                        continent: element.continents[0],
                        capital: element.capital ? element.capital[0] : 'capital no encontrada',
                        subregion: element.subregion ?  element.subregion : 'subregion no encontrada',
                        area: element.area,
                        population: element.population,
                    }                
                })
                return country
            })
        )             
        return countries; //* Devuelvo todos los paises
}

module.exports=getAllCountriesCon;