import { Schema, model, Document } from "mongoose";

export interface IUserProof extends Document {
  public_key: string;
  proof: string;
  type: number;
  condition: string;
  timestamp: string;
  status: number
}

const UserProofSchema: Schema = new Schema({
  public_key: {type: String, require: true},
  proof: {type: String, require: true},
  timestamp: {type: String, require: true},
  type: {type: Number, require: true},
  condition: {type: String, require: true},
  status: {type: Number, require: true},
}, {collection: 'user_proofs', versionKey: false})

export default model<IUserProof>("UserProof", UserProofSchema)