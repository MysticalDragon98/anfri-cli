import createContract from "../../../plugins/web3/contracts";

const GeneticsContract = (addr: string) => createContract("genetics", addr);


export default GeneticsContract;