import * as dotenv from "dotenv"
import { connectMongoDB } from "./connect"
import { userProofsRouter } from "./src/routes/userProofsRouter"
import { walletRouter } from "./src/routes/walletRouter"

const express = require("express")
const cors = require("cors")
const json = require("body-parser")
dotenv.config()
var app = express()
const port = process.env.PORT

app.use(json())
app.use(cors())
app.use("/userProof/", userProofsRouter)
app.use("/wallet/", walletRouter)

app.get("/", async(req: any, res: any) => {
  res.send("AnoCrePro")
})

app.listen(port, async() => {
  connectMongoDB()
})