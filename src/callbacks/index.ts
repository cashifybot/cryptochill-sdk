import { CryptochillBase } from "../base";

export class Callbacks extends CryptochillBase {
  verifyCallback = (signature: string, callback_id: string) => {
    return signature === this.encodeHmac(this.callbackToken, callback_id);
  };
}
