import { AxiosResponse } from "axios";
import { AutoFundingT } from "./types";
import { CryptochillBase } from "../base";
import { ResultT } from "../types";
export declare class AutoFunding extends CryptochillBase {
    listAutoFunding: () => Promise<AxiosResponse<ResultT<AutoFundingT[]>>>;
    getAutoFunding: (id: string) => Promise<AxiosResponse<ResultT<AutoFundingT>>>;
    createAutoFunding: (payload: any) => Promise<AxiosResponse<ResultT<AutoFundingT>>>;
    updateAutoFunding: (payload: any) => Promise<AxiosResponse<ResultT<AutoFundingT>>>;
    deleteAutoFunding: (id: string) => Promise<AxiosResponse>;
}
