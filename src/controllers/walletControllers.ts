import Wallet, {IWallet} from "../models/WalletSchema"
import { Request } from "express"
import * as dotenv from "dotenv";
import BigNumber from "bignumber.js"
const Web3 = require("web3")
const web3 = new Web3(new Web3.providers.HttpProvider("https://rpc.sepolia.org"))

dotenv.config();

async function getInfo (req: Request) {
  var data: any = req.body
  var public_key: string = data.public_key

  var res: any | null = await Wallet.findOne({address: public_key})
  if (res === null) {
    return {
      address: public_key,
      transaction_amount: "0",
      liquidation_number: "0",
      eth_balance: await web3.eth.getBalance(public_key)
    }
  } else {
    return {
      address: public_key,
      frequency_of_transaction: res.frequency_of_transaction,
      transaction_number: res.transaction_number,
      transaction_amount: BigNumber(res.transaction_amount).dividedBy(1000000000000000000).toFixed(),
      last_updated_at_block_number: res.last_updated_at_block_number,
      total_balance: res.total_balance,
      liquidation_number: res.liquidation_number,
      eth_balance:  BigNumber(await web3.eth.getBalance(public_key)).dividedBy(1000000000000000000).toFixed()
    }
  }
}

export {getInfo}