import UserProof, {IUserProof} from "../models/UserProofSchema"
import { Request } from "express"
import * as dotenv from "dotenv";


dotenv.config();

async function addProof (req: Request) {
  var data: any = req.body
  var public_key: string = data.public_key
  var proof: string = data.proof
  var balance: string = data.balance
  var amount: string = data.amount
  var liquidation: string = data.liquidation
  var status: number = data.status
  var nonce: string = data.nonce
  var timestamp: string = data.timestamp

  var newUserProof = new UserProof({
    public_key: public_key,
    proof: proof,
    balance: balance,
    amount: amount,
    liquidation: liquidation,
    status: status,
    nonce: nonce,
    timestamp: timestamp
  })

  await newUserProof.save()

  return await UserProof.findOne({public_key: public_key, proof: proof})
}

async function getAllProof (req: Request) {
  var data: any = req.body 
  var public_key: string = data.public_key.toLowerCase()

  return await UserProof.find({public_key: public_key})
}

async function getProof (req: Request) {
  var data: any = req.body
  var public_key: string = data.public_key.toLowerCase()
  var proof: string = data.proof

  return await UserProof.findOne({public_key: public_key, proof: proof})
}

async function updateStatus (req: Request) {
  var data: any = req.body
  var public_key: string = data.public_key.toLowerCase()
  var proof: string = data.proof

  await UserProof.updateOne({public_key: public_key, proof: proof, status: 0}, {status: 1})
  return await UserProof.findOne({public_key: public_key, proof: proof})
}
export {addProof, getAllProof, getProof, updateStatus}