"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CryptochillBase = void 0;
const axios_1 = __importDefault(require("axios"));
const crypto = __importStar(require("crypto"));
const js_base64_1 = require("js-base64");
class CryptochillBase {
    apiKey;
    apiUrl;
    profileId;
    apiSecret;
    callbackToken;
    constructor(config) {
        this.apiKey = config.apiKey;
        this.apiUrl = config.apiUrl ? config.apiUrl : "https://api.cryptochill.com";
        this.profileId = config.profileId;
        this.apiSecret = config.apiSecret;
        this.callbackToken = config.callbackToken;
    }
    encodeHmac(key, message) {
        return crypto.createHmac("sha256", key).update(message).digest("hex");
    }
    cryptochillApiRequest(endpoint, payload = {}, method = "GET") {
        const request_path = "/v1/" + endpoint + "/";
        if (!payload)
            payload = {};
        //@ts-ignore
        payload.request = request_path;
        //@ts-ignore
        payload.nonce = new Date().getTime();
        const encoded_payload = JSON.stringify(payload);
        const b64 = js_base64_1.Base64.encode(encoded_payload);
        const signature = this.encodeHmac(this.apiSecret, b64);
        return (0, axios_1.default)({
            method: method,
            url: this.apiUrl + request_path,
            headers: {
                "X-CC-KEY": this.apiKey,
                "X-CC-PAYLOAD": b64,
                "X-CC-SIGNATURE": signature,
            },
        });
    }
}
exports.CryptochillBase = CryptochillBase;
