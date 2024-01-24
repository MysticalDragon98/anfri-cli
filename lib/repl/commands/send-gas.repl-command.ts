import { ok } from "node:assert";
import web3 from "../../../plugins/web3";
import { $ETH_ADDRESS } from "../../env";
import { log } from "termx";

interface IOptions {

}

export default async function sendGasREPLCommand (args: string[], options: IOptions) {
    const [ destination, amount ] = args;
    ok(destination && amount, "Usage: send-gas <destination> <amount>");

    log(`Sending ${amount} ETH to ${destination}...`);
    const tx = await web3.eth.sendTransaction({
        from: $ETH_ADDRESS,
        to: destination,
        value: web3.utils.toWei(amount, "ether"),
        type: "0x1"
    });

    log(`Transaction hash: ${tx.transactionHash}`);
    log(`Sent ${amount} ETH to ${destination}`);
}