import { AxiosResponse } from "axios";
import { ExchangeRateT } from "./types";
import { CryptochillBase } from "../base";
import { ResultT } from "../types";
export declare class ExchangeRates extends CryptochillBase {
    listRates: () => Promise<AxiosResponse<ResultT<ExchangeRateT[]>>>;
    getRate: (symbol: string) => Promise<AxiosResponse<ResultT<ExchangeRateT>>>;
}
