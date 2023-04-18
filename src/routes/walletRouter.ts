import {Request, Response} from "express";
import { getInfo } from "../controllers/walletControllers";
const express = require("express")
const router = express.Router();

router.post("/info/", async(req: Request, res: Response) => {
  try {
    var resData = await getInfo(req)
    return res.status(201).json(resData)
  } catch (err) {
    console.log("Error: POST /centic/user/register/", err)
    return res.status(404).json({err: (err as Error).message})
  }
})

export { router as walletRouter}