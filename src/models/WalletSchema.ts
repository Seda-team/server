import { Schema, model, Document } from "mongoose";

export interface IWallet extends Document {
  _id: string;
  address: string;
  frequency_of_transaction: number;
  transaction_number: number;
  transaction_amount: string;
  last_updated_at_block_number: number;
  total_balance: number;
  liquidation_number: number;
}

const WaleltSchema: Schema = new Schema({
  _id: {type: String, require: true},
  address: {type: String, require: true},
  frequency_of_transaction: {type: Number, require: true},
  transaction_number: {type: Number, require: true},
  transaction_amount: {type: String, require: true},
  last_updated_at_block_number: {type: Number, require: true},
  total_balance: {type: Number, require: true},
  liquidation_number: {type: Number, require: true},
}, {collection: 'wallet', versionKey: false})

export default model<IWallet>("Wallet", WaleltSchema)