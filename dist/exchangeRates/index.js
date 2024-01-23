"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExchangeRates = void 0;
const base_1 = require("../base");
const endpoint = "exchange-rates";
class ExchangeRates extends base_1.CryptochillBase {
    listRates = () => {
        return this.cryptochillApiRequest(endpoint);
    };
    getRate = (symbol) => {
        return this.cryptochillApiRequest(endpoint + `/${symbol}`);
    };
}
exports.ExchangeRates = ExchangeRates;
