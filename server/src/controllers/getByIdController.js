const {Country}=require('../db');

const getByIdController=async(id)=>{
    const filter=await Country.findByPk(id.toUpperCase());
    return filter;
}

module.exports=getByIdController;