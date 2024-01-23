"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutoConversions = void 0;
const base_1 = require("../base");
const endpoint = "automatic-conversions";
class AutoConversions extends base_1.CryptochillBase {
    listAutoConversions() {
        return this.cryptochillApiRequest(endpoint);
    }
    getAutoConversions(id) {
        return this.cryptochillApiRequest(endpoint + `/${id}`);
    }
    createAutoConversions(payload) {
        return this.cryptochillApiRequest(endpoint, payload, "POST");
    }
    updateAutoConversions(id, payload) {
        return this.cryptochillApiRequest(endpoint + `/${id}`, payload, "PUT");
    }
    deleteAutoConversions(id) {
        return this.cryptochillApiRequest(endpoint + `/${id}`, null, "DELETE");
    }
}
exports.AutoConversions = AutoConversions;
