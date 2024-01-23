"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Invoices = void 0;
const base_1 = require("../base");
const endpoint = "invoices";
class Invoices extends base_1.CryptochillBase {
    listInvoices(params) {
        const queryParams = new URLSearchParams();
        if (queryParams && params) {
            Object.entries(params).forEach((item) => {
                if (item[1] !== undefined) {
                    queryParams.set(item[0], item[1].toString());
                }
            });
        }
        return this.cryptochillApiRequest(endpoint + `?${queryParams}`);
    }
    getInvoice(id) {
        return this.cryptochillApiRequest(endpoint + `/${id}`);
    }
    createInvoice(payload) {
        return this.cryptochillApiRequest(endpoint, payload, "POST");
    }
}
exports.Invoices = Invoices;
