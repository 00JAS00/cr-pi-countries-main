const {Activity}=require("../db");

const getAllActivityController=async()=>{
    const activities=await Activity.findAll();
    if (!activities) throw new Error("No activities found");
    return activities;
}
module.exports=getAllActivityController;