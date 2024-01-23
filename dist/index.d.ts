import { Account } from "./account";
import { AutoConversions } from "./autoConversions";
import { AutoFunding } from "./autoFunding";
import { AutomaticPayouts } from "./autoPayouts";
import { CryptochillBase } from "./base";
import { Callbacks } from "./callbacks";
import { Conversions } from "./conversions";
import { ExchangeRates } from "./exchangeRates";
import { Invoices } from "./invoices";
import { Payouts } from "./payouts";
import { Profiles } from "./profiles";
import { Transactions } from "./transactions";
import { Wallets } from "./wallets";
export declare class Cryptochill extends CryptochillBase {
    account: Account;
    invoices: Invoices;
    autoConversions: AutoConversions;
    autoFunding: AutoFunding;
    autoPayouts: AutomaticPayouts;
    callbacks: Callbacks;
    conversions: Conversions;
    exchangeRates: ExchangeRates;
    payouts: Payouts;
    profiles: Profiles;
    transactions: Transactions;
    wallets: Wallets;
    constructor(config: {
        apiKey: string;
        apiUrl: string;
        profileId: string;
        apiSecret: string;
        callbackToken: string | "";
    });
}
