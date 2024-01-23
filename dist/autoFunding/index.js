"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutoFunding = void 0;
const base_1 = require("../base");
const endpoint = "automatic-funding";
class AutoFunding extends base_1.CryptochillBase {
    listAutoFunding = () => {
        return this.cryptochillApiRequest(endpoint);
    };
    getAutoFunding = (id) => {
        return this.cryptochillApiRequest(endpoint + `/${id}`);
    };
    createAutoFunding = (payload) => {
        return this.cryptochillApiRequest(endpoint, payload, "POST");
    };
    updateAutoFunding = (payload) => {
        return this.cryptochillApiRequest(endpoint, payload, "PUT");
    };
    deleteAutoFunding = (id) => {
        return this.cryptochillApiRequest(endpoint + `/${id}`, null, "DELETE");
    };
}
exports.AutoFunding = AutoFunding;
