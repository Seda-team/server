import UserProof, {IUserProof} from "../models/UserProofSchema"
import { Request } from "express"
import * as dotenv from "dotenv";


dotenv.config();

async function addProof (req: Request) {
  var data: any = req.body
  var public_key: string = data.public_key
  var proof: string = data.proof
  var type: number = data.type
  var condition: string = data.condition
  var status: number = data.status
  var timestamp: string = data.timestamp

  var newUserProof = new UserProof({
    public_key: public_key,
    proof: proof,
    type: type,
    condition: condition,
    status: status,
    timestamp: timestamp
  })

  await newUserProof.save()

  return await UserProof.findOne({public_key: public_key, proof: proof})
}

export {addProof}