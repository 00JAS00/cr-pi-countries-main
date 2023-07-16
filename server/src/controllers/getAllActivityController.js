const {Activity}=require("../db");

const getAllActivityController=async()=>{
    const activities=await Activity.findAll({
        include:{
            model:Country,
            attributes:['name']
        }
    });
    if (!activities) throw new Error("No activities found");
    return activities;
}
module.exports=getAllActivityController;