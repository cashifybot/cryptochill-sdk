import { AxiosResponse } from "axios";
import { WalletT } from "./types";
import { CryptochillBase } from "../base";
import { ResultT } from "../types";

const endpoint = "wallets";

export class Wallets extends CryptochillBase {
  listWallets = (
    profile_id?: string
  ): Promise<AxiosResponse<ResultT<WalletT[]>>> => {
    return this.cryptochillApiRequest(
      endpoint + `${profile_id ? `?profile_id=${profile_id}` : ""}`
    );
  };

  getWallet = (id: string): Promise<AxiosResponse<ResultT<WalletT>>> => {
    return this.cryptochillApiRequest(endpoint + `/${id}`);
  };
}
