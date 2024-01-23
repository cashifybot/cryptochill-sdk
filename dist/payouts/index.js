"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payouts = void 0;
const base_1 = require("../base");
const endpoint = "payouts";
class Payouts extends base_1.CryptochillBase {
    listPayouts = () => {
        return this.cryptochillApiRequest(endpoint);
    };
    getPayout = (id) => {
        return this.cryptochillApiRequest(endpoint + `/${id}`);
    };
    createPayout = (payload) => {
        return this.cryptochillApiRequest(endpoint, payload, "POST");
    };
    approveOrRejectPayout = (id, isApprove) => {
        return this.cryptochillApiRequest(endpoint + `/${id}`, { approve: isApprove }, "PUT");
    };
    payoutConfirmations = (ids) => {
        return this.cryptochillApiRequest(endpoint + "/confirmations/", { id: ids }, "POST");
    };
}
exports.Payouts = Payouts;
