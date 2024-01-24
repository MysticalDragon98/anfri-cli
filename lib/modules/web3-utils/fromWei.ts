export default function fromWei (wei: bigint, decimals: bigint) {
    const factor = BigInt(10) ** decimals;
    const integerPart = wei / factor;
    const decimalPart = wei % factor;
    const paddedDecimalPart = decimalPart.toString().padStart(Number(decimals), '0');

    return parseFloat(`${integerPart}.${paddedDecimalPart}`);
}