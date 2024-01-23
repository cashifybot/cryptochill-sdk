"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wallets = void 0;
const base_1 = require("../base");
const endpoint = "wallets";
class Wallets extends base_1.CryptochillBase {
    listWallets = (profile_id) => {
        return this.cryptochillApiRequest(endpoint + `${profile_id ? `?profile_id=${profile_id}` : ""}`);
    };
    getWallet = (id) => {
        return this.cryptochillApiRequest(endpoint + `/${id}`);
    };
}
exports.Wallets = Wallets;
