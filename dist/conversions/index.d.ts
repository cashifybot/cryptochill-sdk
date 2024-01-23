import { AxiosResponse } from "axios";
import { ConversionT } from "./types";
import { CryptochillBase } from "../base";
import { ResultT } from "../types";
export declare class Conversions extends CryptochillBase {
    listConversions: () => Promise<AxiosResponse<ResultT<ConversionT[]>>>;
    getConversion: (id: string) => Promise<AxiosResponse<ResultT<ConversionT>>>;
    createConversion: (payload: any) => Promise<AxiosResponse<ResultT<ConversionT>>>;
    updateConversion: (id: string, payload: any) => Promise<AxiosResponse<ResultT<ConversionT[]>>>;
    deleteConversion: (id: string) => Promise<AxiosResponse>;
}
