"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Profiles = void 0;
const base_1 = require("../base");
const endpoint = "profiles";
class Profiles extends base_1.CryptochillBase {
    listProfiles = () => {
        return this.cryptochillApiRequest(endpoint);
    };
    getProfile = (id) => {
        return this.cryptochillApiRequest(endpoint + `/${id}`);
    };
}
exports.Profiles = Profiles;
