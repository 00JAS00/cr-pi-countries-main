const createActivityController=require('../controllers/createActivityController');
const getAllActivityController=require("../controllers/getAllActivityController");

const createActivity=async(req,res)=>{
    try{
        const {name,difficulty,duration,season}=req.body;
        const newActivity=await createActivityController(name,difficulty,duration,season);
        res.status(201).json(newActivity);
    }catch(err){
        res.status(400).json({message:err.message});
    }
};
const getAllActivities=async(req,res)=>{
    try{
        const allActivities=await getAllActivityController();
        res.status(200).json(allActivities);
    }catch(err){
        res.status(400).json({message:err.message});
    }
};

module.exports = {createActivity,getAllActivities};