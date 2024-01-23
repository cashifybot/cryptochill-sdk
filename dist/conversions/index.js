"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conversions = void 0;
const base_1 = require("../base");
const endpoint = "conversions";
class Conversions extends base_1.CryptochillBase {
    listConversions = () => {
        return this.cryptochillApiRequest(endpoint);
    };
    getConversion = (id) => {
        return this.cryptochillApiRequest(endpoint + `/${id}`);
    };
    createConversion = (payload) => {
        return this.cryptochillApiRequest(endpoint, payload, "POST");
    };
    updateConversion = (id, payload) => {
        return this.cryptochillApiRequest(endpoint + `/${id}`, payload, "PUT");
    };
    deleteConversion = (id) => {
        return this.cryptochillApiRequest(endpoint + `/${id}`, null, "DELETE");
    };
}
exports.Conversions = Conversions;
