"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Callbacks = void 0;
const base_1 = require("../base");
class Callbacks extends base_1.CryptochillBase {
    verifyCallback = (signature, callback_id) => {
        return signature === this.encodeHmac(this.callbackToken, callback_id);
    };
}
exports.Callbacks = Callbacks;
