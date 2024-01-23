"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cryptochill = void 0;
const account_1 = require("./account");
const autoConversions_1 = require("./autoConversions");
const autoFunding_1 = require("./autoFunding");
const autoPayouts_1 = require("./autoPayouts");
const base_1 = require("./base");
const callbacks_1 = require("./callbacks");
const conversions_1 = require("./conversions");
const exchangeRates_1 = require("./exchangeRates");
const invoices_1 = require("./invoices");
const payouts_1 = require("./payouts");
const profiles_1 = require("./profiles");
const transactions_1 = require("./transactions");
const wallets_1 = require("./wallets");
class Cryptochill extends base_1.CryptochillBase {
    account;
    invoices;
    autoConversions;
    autoFunding;
    autoPayouts;
    callbacks;
    conversions;
    exchangeRates;
    payouts;
    profiles;
    transactions;
    wallets;
    constructor(config) {
        super(config);
        this.account = new account_1.Account(config);
        this.invoices = new invoices_1.Invoices(config);
        this.autoConversions = new autoConversions_1.AutoConversions(config);
        this.autoFunding = new autoFunding_1.AutoFunding(config);
        this.autoPayouts = new autoPayouts_1.AutomaticPayouts(config);
        this.callbacks = new callbacks_1.Callbacks(config);
        this.conversions = new conversions_1.Conversions(config);
        this.exchangeRates = new exchangeRates_1.ExchangeRates(config);
        this.payouts = new payouts_1.Payouts(config);
        this.profiles = new profiles_1.Profiles(config);
        this.transactions = new transactions_1.Transactions(config);
        this.wallets = new wallets_1.Wallets(config);
    }
}
exports.Cryptochill = Cryptochill;
