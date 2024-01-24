import { ok } from "assert";
import web3 from "../../../plugins/web3";
import { log } from "termx";
import ERC20Contract from "../../web3/contracts/ERC20.contract";
import fromWei from "../../modules/web3-utils/fromWei";
import { MSBlockchain } from "../../services";

interface IOptions {
    token?: string;
}

export default async function balanceREPLCommand (args: string[], options: IOptions) {
    const [ userAddress ] = args;
    ok(userAddress, "Usage: balance [--token <tokenName>] <userAddress>");

    if (!options.token) {
        const balance = await web3.eth.getBalance(userAddress);

        return fromWei(balance, BigInt(18));
    }

    const contracts = await MSBlockchain.network.contracts();
    const tokenAddress = contracts[options.token];

    ok(tokenAddress, `Token ${options.token} not found`);

    const token = ERC20Contract(tokenAddress);

    const balance: bigint = await token.methods.balanceOf(userAddress).call();
    const decimals: bigint = await token.methods.decimals().call();

    return fromWei(balance, decimals);
}