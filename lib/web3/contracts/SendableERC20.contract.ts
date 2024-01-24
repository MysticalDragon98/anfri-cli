import createContract from "../../../plugins/web3/contracts";

const SendableERC20Contract = (addr: string) => createContract("SendableERC20", addr);


export default SendableERC20Contract;