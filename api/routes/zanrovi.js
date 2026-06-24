import express from "express";
import { getZanr, getAllZanr } from "../controllers/zanr.js";

const router = express.Router()
router.get("/find", getAllZanr);
router.get("/find/:zanrId", getZanr);
router.post("/add", insertZanr);
router.delete("/delete/:id", deleteZanr);

export default router
