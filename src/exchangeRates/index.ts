import { AxiosResponse } from "axios";
import { ExchangeRateT } from "./types";
import { CryptochillBase } from "../base";
import { ResultT } from "../types";

const endpoint = "exchange-rates";

export class ExchangeRates extends CryptochillBase {
  listRates = (): Promise<AxiosResponse<ResultT<ExchangeRateT[]>>> => {
    return this.cryptochillApiRequest(endpoint);
  };

  getRate = (
    symbol: string
  ): Promise<AxiosResponse<ResultT<ExchangeRateT>>> => {
    return this.cryptochillApiRequest(endpoint + `/${symbol}`);
  };
}
