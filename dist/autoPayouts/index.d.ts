import { AxiosResponse } from "axios";
import { AutoPayoutT } from "./types";
import { CryptochillBase } from "../base";
import { ResultT } from "../types";
export declare class AutomaticPayouts extends CryptochillBase {
    listAutoPayouts: () => Promise<AxiosResponse<ResultT<AutoPayoutT[]>>>;
    getAutoPayout: (id: string) => Promise<AxiosResponse<ResultT<AutoPayoutT>>>;
    createAutoPayout: (payload: any) => Promise<AxiosResponse<ResultT<AutoPayoutT>>>;
    updateAutoPayout: (payload: any) => Promise<AxiosResponse<ResultT<AutoPayoutT>>>;
    deleteAutoPayout: (id: string) => Promise<unknown>;
}
