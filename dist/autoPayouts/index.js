"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutomaticPayouts = void 0;
const base_1 = require("../base");
const endpoint = "automatic-payouts";
class AutomaticPayouts extends base_1.CryptochillBase {
    listAutoPayouts = () => {
        return this.cryptochillApiRequest(endpoint);
    };
    getAutoPayout = (id) => {
        return this.cryptochillApiRequest(endpoint + `/${id}`);
    };
    createAutoPayout = (payload) => {
        return this.cryptochillApiRequest(endpoint, payload, "POST");
    };
    updateAutoPayout = (payload) => {
        return this.cryptochillApiRequest(endpoint, payload, "PUT");
    };
    deleteAutoPayout = (id) => {
        return this.cryptochillApiRequest(endpoint + `/${id}`, null, "DELETE");
    };
}
exports.AutomaticPayouts = AutomaticPayouts;
