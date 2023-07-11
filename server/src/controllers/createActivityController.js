const {Activity}=require("../db");

const createActivityController=async(name,difficulty,duration,season)=>{
    console.log(name,difficulty,duration,season);
    const newActivity=await Activity.create({name,difficulty,duration,season});
    return newActivity
}

module.exports=createActivityController;