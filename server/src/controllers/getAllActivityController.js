const {Activity,Country}=require("../db");
// *Traigo todas las actividades de la Base de Datos
const getAllActivityController=async()=>{
    const activities=await Activity.findAll({
        include:{
            model:Country,
            attributes:['name']
        }
    });
    if (!activities) throw new Error("No activities found");
    // * En caso de que el if de false devuelvo activities
    return activities;
}
module.exports=getAllActivityController;