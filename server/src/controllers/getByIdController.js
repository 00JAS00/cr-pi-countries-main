const {Country}=require('../db');

const {Activity}=require('../db');
// * Traigo todos los paises que coincidan con el id de la busqueda
const getByIdController=async(id)=>{
    const filter=await Country.findByPk(id.toUpperCase(),{
        include:{
            model:Activity,
            attributes:['name','difficulty','duration','season']
        }
    });
    // * Si no hay paises que coincidan con la busqueda devuelvo un error descriptivo
    if(!filter)throw new Error("No countries found with this id");
    // * Y SI hay paises retorno los paises
    return filter;
}

module.exports=getByIdController;