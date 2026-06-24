import express from "express";
import { getZanr } from "../controllers/zanr.js";

const router = express.Router()
router.get ("/find:zanrId", getZanr);

export default router
