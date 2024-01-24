import { log } from "termx";
import GeneticsContract from "../../web3/contracts/genetics.contract";
import { MSBlockchain } from "../../services";
import { ok } from "assert";
import { $ETH_ADDRESS } from "../../env";

interface IOptions {

}

export default async function nftMintREPLCommand (args: string[], options: IOptions) {
    const [ destination, amount ] = args;
    const Contracts = await MSBlockchain.network.contracts();
    const Genetics = await GeneticsContract(Contracts.genetics);

    ok(destination && amount, "Usage: nft-mint <destination> <amount>");
    log(`Minting ${amount} NFTs to ${destination}...`);

    for (let i=0;i<+amount;i++) {
        log(`Minting NFT #${i+1}...`);

        await Genetics.methods.createAnfriToPlayer(destination).send({
            from: $ETH_ADDRESS,
            type: "0x1"
        });
    }

    log(`Successfully minted ${amount} NFTs to ${destination}`)
}