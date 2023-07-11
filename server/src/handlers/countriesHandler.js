const getAllCountriesCon=require('../controllers/getAllCountriesCon');
const getByNameController=require('../controllers/getByNameController');
const getByIdController=require('../controllers/getByIdController');
const getAllCountries=async(req,res)=>{
    try{
        const{name}=req.query;
        const data=!name? await getAllCountriesCon():await getByNameController(name);
        res.status(200).json(data);
    }catch(error){
        res.status(400).json({message:error.message});
    }
}

const getById=async(req,res)=>{
    try{
        const {id}=req.params;
        const data=await getByIdController(id);
        res.status(200).json(data);
    }catch(error){
        res.status(400).json({message:error.message});
    }
};


module.exports={getAllCountries,getById};

