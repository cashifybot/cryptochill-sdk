import { CryptochillBase } from "../base";
import { ResultT } from "../types";
import { AutoConversionT, CreateAutoConversionPayloadT, UpdateAutoConversionPayloadT } from "./types";
import { AxiosResponse } from "axios";
export declare class AutoConversions extends CryptochillBase {
    listAutoConversions(): Promise<AxiosResponse<ResultT<AutoConversionT[]>>>;
    getAutoConversions(id: string): Promise<unknown>;
    createAutoConversions(payload: CreateAutoConversionPayloadT): Promise<AxiosResponse<ResultT<AutoConversionT>>>;
    updateAutoConversions(id: string, payload: UpdateAutoConversionPayloadT): Promise<AxiosResponse<ResultT<AutoConversionT>>>;
    deleteAutoConversions(id: string): Promise<AxiosResponse>;
}
