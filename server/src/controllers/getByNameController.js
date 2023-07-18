
const {Country} = require('../db');
const {Op} = require('sequelize');

// * Traigo los paises que tienen un nombre parecido a la busqueda
const getByNameController=async (name)=>{
    const data= await Country.findAll({
        //* El where es un filtro para que me traiga los paises que coincidan 
        // * con la busqueda (SELECT * FROM countries WHERE name LIKE '%name%')
        where:{name: {[Op.iLike]: `%${name}%`}}
    });
    // * Si no hay paises que coincidan con la busqueda devuelvo un error descriptivo 
    if(data.length==0)throw new Error("No countries found");
    const filter=data.filter(country=>country.name.toLowerCase().startsWith(name.toLowerCase()));
    // * Y SI hay paises retorno los paises
    return [...filter];
}
module.exports=getByNameController;
