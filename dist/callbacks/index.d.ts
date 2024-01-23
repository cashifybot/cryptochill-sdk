import { CryptochillBase } from "../base";
export declare class Callbacks extends CryptochillBase {
    verifyCallback: (signature: string, callback_id: string) => boolean;
}
