import { AxiosResponse } from "axios";
import { AutoFundingT } from "./types";
import { CryptochillBase } from "../base";
import { ResultT } from "../types";

const endpoint = "automatic-funding";

export class AutoFunding extends CryptochillBase {
  listAutoFunding = (): Promise<AxiosResponse<ResultT<AutoFundingT[]>>> => {
    return this.cryptochillApiRequest(endpoint);
  };

  getAutoFunding = (
    id: string
  ): Promise<AxiosResponse<ResultT<AutoFundingT>>> => {
    return this.cryptochillApiRequest(endpoint + `/${id}`);
  };

  createAutoFunding = (
    payload: any
  ): Promise<AxiosResponse<ResultT<AutoFundingT>>> => {
    return this.cryptochillApiRequest(endpoint, payload, "POST");
  };

  updateAutoFunding = (
    payload: any
  ): Promise<AxiosResponse<ResultT<AutoFundingT>>> => {
    return this.cryptochillApiRequest(endpoint, payload, "PUT");
  };

  deleteAutoFunding = (id: string): Promise<AxiosResponse> => {
    return this.cryptochillApiRequest(endpoint + `/${id}`, null, "DELETE");
  };
}
