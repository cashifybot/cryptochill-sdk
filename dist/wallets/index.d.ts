import { AxiosResponse } from "axios";
import { WalletT } from "./types";
import { CryptochillBase } from "../base";
import { ResultT } from "../types";
export declare class Wallets extends CryptochillBase {
    listWallets: (profile_id?: string) => Promise<AxiosResponse<ResultT<WalletT[]>>>;
    getWallet: (id: string) => Promise<AxiosResponse<ResultT<WalletT>>>;
}
