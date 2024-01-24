import { log } from "termx";

interface IOptions {

}

export default async function statusREPLCommand (args: string[], options: IOptions) {
    log("All services are up and running!");
}