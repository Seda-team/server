import { Schema, model, Document } from "mongoose";

export interface IUserProof extends Document {
  public_key: string;
  proof: string;
  balance: string;
  amount: string;
  liquidation: string;
  timestamp: string;
  nonce: string;
  status: number
}

const UserProofSchema: Schema = new Schema({
  public_key: {type: String, require: true},
  proof: {type: String, require: true},
  timestamp: {type: String, require: true},
  balance: {type: String, require: true},
  amount: {type: String, require: true},
  liquidation: {type: String, require: true},
  nonce: {type: String, require: true},
  status: {type: Number, require: true},
}, {collection: 'user_proofs', versionKey: false})

export default model<IUserProof>("UserProof", UserProofSchema)