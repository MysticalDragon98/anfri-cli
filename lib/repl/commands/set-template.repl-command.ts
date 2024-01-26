import { ok } from "assert";
import { MSBlockchain } from "../../services";
import TemplatesContract from "../../web3/contracts/templates.contract";
import { $ETH_ADDRESS } from "../../env";
import { log } from "termx";

interface IOptions {

}

export default async function setTemplateREPLCommand (args: string[], options: IOptions) {
    const [ templateName, address ] = args;

    ok(templateName && address, "Usage: set-template <templateName> <address>");

    const contracts = await MSBlockchain.network.contracts();
    const templates = TemplatesContract(contracts.templates);
    const currentAddress: string = await templates.methods.resolve(templateName).call();

    ok(currentAddress.toLowerCase() !== address.toLowerCase(), `Template ${templateName} already set to ${address}`);

    await templates.methods.register(templateName, address).send({
        from: $ETH_ADDRESS,
        type: "0x1"
    });

    log(`Template ${templateName} set to ${address}`);
}