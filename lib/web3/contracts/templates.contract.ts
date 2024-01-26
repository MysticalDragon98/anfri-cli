import createContract from "../../../plugins/web3/contracts";

const TemplatesContract = (addr: string) => createContract("templates", addr);

export default TemplatesContract;