import { AxiosResponse } from "axios";
import { RetrieveConfirmationT, TransactionT } from "./types";
import { CryptochillBase } from "../base";
import { ResultT } from "../types";

const endpoint = "transactions";

export class Transactions extends CryptochillBase {
  listTransactions = (): Promise<AxiosResponse<ResultT<TransactionT[]>>> => {
    return this.cryptochillApiRequest(endpoint);
  };

  getTransaction = (
    id: string
  ): Promise<AxiosResponse<ResultT<TransactionT>>> => {
    return this.cryptochillApiRequest(endpoint + `/${id}`);
  };

  retrieveConfirmations = (
    ids: string[]
  ): Promise<AxiosResponse<ResultT<RetrieveConfirmationT[]>>> => {
    return this.cryptochillApiRequest(endpoint, { id: ids }, "POST");
  };
}
