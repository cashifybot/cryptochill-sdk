"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transactions = void 0;
const base_1 = require("../base");
const endpoint = "transactions";
class Transactions extends base_1.CryptochillBase {
    listTransactions = () => {
        return this.cryptochillApiRequest(endpoint);
    };
    getTransaction = (id) => {
        return this.cryptochillApiRequest(endpoint + `/${id}`);
    };
    retrieveConfirmations = (ids) => {
        return this.cryptochillApiRequest(endpoint, { id: ids }, "POST");
    };
}
exports.Transactions = Transactions;
