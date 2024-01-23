import { AxiosResponse } from "axios";
import { AutoPayoutT } from "./types";
import { CryptochillBase } from "../base";
import { ResultT } from "../types";

const endpoint = "automatic-payouts";

export class AutomaticPayouts extends CryptochillBase {
  listAutoPayouts = (): Promise<AxiosResponse<ResultT<AutoPayoutT[]>>> => {
    return this.cryptochillApiRequest(endpoint);
  };

  getAutoPayout = (
    id: string
  ): Promise<AxiosResponse<ResultT<AutoPayoutT>>> => {
    return this.cryptochillApiRequest(endpoint + `/${id}`);
  };

  createAutoPayout = (
    payload: any
  ): Promise<AxiosResponse<ResultT<AutoPayoutT>>> => {
    return this.cryptochillApiRequest(endpoint, payload, "POST");
  };

  updateAutoPayout = (
    payload: any
  ): Promise<AxiosResponse<ResultT<AutoPayoutT>>> => {
    return this.cryptochillApiRequest(endpoint, payload, "PUT");
  };

  deleteAutoPayout = (id: string) => {
    return this.cryptochillApiRequest(endpoint + `/${id}`, null, "DELETE");
  };
}
