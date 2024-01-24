export default function toWei(amount: number, decimals: bigint) {
    let res = BigInt(amount) * (BigInt(10) ** decimals);

    return res
}