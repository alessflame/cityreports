import express from "express";
import { getReportsByCity, getReports, insertReport } from "../controllers/reportController.js";


const router = express.Router();


router.get("/", getReports);

router.get("/:city", getReportsByCity);

router.post("/", insertReport);

export default router;
