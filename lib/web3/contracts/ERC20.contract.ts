import createContract from "../../../plugins/web3/contracts";

const ERC20Contract = (addr: string) => createContract("ERC20", addr);

export default ERC20Contract;