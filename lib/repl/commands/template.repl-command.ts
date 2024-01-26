import { ok } from "assert";
import { MSBlockchain } from "../../services";
import TemplatesContract from "../../web3/contracts/templates.contract";
import { isZeroAddress, zeroAddress } from "ethereumjs-util";

interface IOptions {

}

export default async function templateREPLCommand (args: string[], options: IOptions) {
    const [ templateName ] = args;

    ok(templateName, "Usage: template <templateName>");

    const contracts = await MSBlockchain.network.contracts();
    const templates = TemplatesContract(contracts.templates);
    const address: string = await templates.methods.resolve(templateName).call();

    ok(!isZeroAddress(address), `Template ${templateName} not found`);

    return address;
}