import { MSBlockchain } from "../../services";

interface IOptions {

}

export default async function contractsREPLCommand (args: string[], options: IOptions) {
    return await MSBlockchain.network.contracts();
}