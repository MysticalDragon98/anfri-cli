import { config } from "dotenv";
import { ok } from "assert";

config();

ok(process.env.ETH_PROVIDER, 'Missing required environment variable: ETH_PROVIDER');
export const $ETH_PROVIDER = process.env.ETH_PROVIDER;
ok(process.env.ETH_PRIVKEY, 'Missing required environment variable: ETH_PRIVKEY');
export const $ETH_PRIVKEY = process.env.ETH_PRIVKEY;
ok(process.env.ETH_ADDRESS, 'Missing required environment variable: ETH_ADDRESS');
export const $ETH_ADDRESS = process.env.ETH_ADDRESS;
export const $BLOCKCHAIN_HOST = process.env.BLOCKCHAIN_HOST;