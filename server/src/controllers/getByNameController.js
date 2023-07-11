
const {Country} = require('../db');
const {Op} = require('sequelize');
const getByNameController=async (name)=>{
    const filter= await Country.findAll({
        where:{
            name: {[Op.iLike]: `%${name}%`}
        }
    });
    return [...filter];
}
module.exports=getByNameController;
