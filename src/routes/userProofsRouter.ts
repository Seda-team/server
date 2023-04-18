import {Request, Response} from "express";
import { addProof } from "../controllers/userProofsControllers";
const express = require("express")
const router = express.Router();

router.post("/addProof/", async(req: Request, res: Response) => {
  try {
    var resData = await addProof(req)
    return res.status(201).json(resData)
  } catch (err) {
    console.log("Error: POST /centic/user/register/", err)
    return res.status(404).json({err: (err as Error).message})
  }
})

export { router as userProofsRouter}