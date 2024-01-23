"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
const base_1 = require("../base");
const endpoint = "account";
class Account extends base_1.CryptochillBase {
    getAccount() {
        return this.cryptochillApiRequest(endpoint + "/settings/");
    }
}
exports.Account = Account;
