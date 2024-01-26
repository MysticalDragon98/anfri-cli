import { ok } from "assert";
import { MSBlockchain } from "../../services";
import SendableERC20Contract from "../../web3/contracts/SendableERC20.contract";
import toWei from "../../modules/web3-utils/toWei";
import { $ETH_ADDRESS } from "../../env";
import { log } from "console";

interface IOptions {

}

export default async function mintREPLCommand (args: string[], options: IOptions) {
    const [ amount, tokenName, destination ] = args;

    ok(amount && tokenName && destination, "Usage: send <amount> <tokenName> <destination>");
    
    const contracts = await MSBlockchain.network.contracts();
    const tokenAddress = tokenName.startsWith("0x")? tokenName : contracts[tokenName];
    const token = SendableERC20Contract(tokenAddress);
    const decimals: bigint = await token.methods.decimals().call();
    const amountInWei = toWei(parseFloat(amount), decimals);

    await token.methods.mint(destination, amountInWei).send({
        from: $ETH_ADDRESS,
        type: "0x1"
    });

    log(`Sent ${amount} ${tokenName} to ${destination}`);
}