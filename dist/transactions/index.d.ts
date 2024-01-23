import { AxiosResponse } from "axios";
import { RetrieveConfirmationT, TransactionT } from "./types";
import { CryptochillBase } from "../base";
import { ResultT } from "../types";
export declare class Transactions extends CryptochillBase {
    listTransactions: () => Promise<AxiosResponse<ResultT<TransactionT[]>>>;
    getTransaction: (id: string) => Promise<AxiosResponse<ResultT<TransactionT>>>;
    retrieveConfirmations: (ids: string[]) => Promise<AxiosResponse<ResultT<RetrieveConfirmationT[]>>>;
}
