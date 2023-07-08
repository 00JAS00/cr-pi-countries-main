const { Router } = require("express");
const { getAllCountries, getById,getByName } = require("../handlers/countriesHandler");
const {createActivity,getAllActivities} = require("../handlers/handlersActivities");

const router = Router();

router.get("/countries",getAllCountries);
router.get("/countries/:id",getById);
router.get("/countries/name",getByName);
router.post("/activities",createActivity);
router.get("/activities",getAllActivities);


module.exports = router;
