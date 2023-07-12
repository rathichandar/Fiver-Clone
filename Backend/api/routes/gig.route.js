import express from "express"
import {verifyToken} from "../middleware/jwt.js";

import {createGig,deleteGig,getGig,getGigs} from "../controllers/gig.controller.js"
const router = express.Router();
router.delete("/:id",verifyToken,deleteGig)
router.get("/single/:id",getGig)
router.post("/",verifyToken,createGig);
router.get("/",getGigs)


export default router;