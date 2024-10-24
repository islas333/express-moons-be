import { Router } from "express";
import { getAllSmileCentersController } from "../controllers/smilleCenterController";
import { getMoonsCountriesController } from "../controllers/countryController";
import { getMoonsCenterTypeController } from "../controllers/centerTypeController";
import { getMoonsZoneController } from "../controllers/zoneController";
import { getMoonsServicesController } from "../controllers/serviceController";

const router = Router();

router.get("/smilecenters", getAllSmileCentersController);
router.get("/countries", getMoonsCountriesController);
router.get("/centertypes", getMoonsCenterTypeController);
router.get("/zones", getMoonsZoneController);
router.get("/services", getMoonsServicesController);

export default router;
