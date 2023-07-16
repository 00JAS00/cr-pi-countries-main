const {Country}=require('../db');

const {Activity}=require('../db');
const getByIdController=async(id)=>{
    const filter=await Country.findByPk(id.toUpperCase(),{
        include:{
            model:Activity,
            attributes:['name','difficulty','duration','season']
        }
    });
    return filter;
}

module.exports=getByIdController;