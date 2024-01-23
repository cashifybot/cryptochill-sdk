import { AxiosResponse } from "axios";
import { CryptochillBase } from "../base";
import { AccountT } from "./types";
import { ResultT } from "../types";
export declare class Account extends CryptochillBase {
    getAccount(): Promise<AxiosResponse<ResultT<AccountT>>>;
}
