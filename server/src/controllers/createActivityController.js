const {Activity,Country}=require("../db");

const createActivityController=async(name,difficulty,duration,season,countries)=>{
    console.log(name,difficulty,duration,season);
    const newActivity=await Activity.create({name,difficulty,duration,season});
    const country= await Country.findAll({where:{name:countries}}); 
    return await newActivity.addCountry(country); 
}

module.exports=createActivityController;