const {Activity,Country}=require("../db");
// * Creo las actividades y las subo a la base de datos con su relacion
const createActivityController=async(name,difficulty,duration,season,countries)=>{
    const newActivity=await Activity.create({name,difficulty,duration,season});
    // *Hago la relacion entre las actividades y las paises
    const country= await Country.findAll({where:{name:countries}});
    return await newActivity.addCountry(country); 
}

module.exports=createActivityController;