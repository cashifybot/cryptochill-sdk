import { AxiosResponse } from "axios";
import { ProfileT } from "./types";
import { CryptochillBase } from "../base";
import { ResultT } from "../types";

const endpoint = "profiles";

export class Profiles extends CryptochillBase {
  listProfiles = (): Promise<AxiosResponse<ResultT<ProfileT[]>>> => {
    return this.cryptochillApiRequest(endpoint);
  };

  getProfile = (id: string): Promise<AxiosResponse<ResultT<ProfileT>>> => {
    return this.cryptochillApiRequest(endpoint + `/${id}`);
  };
}
