import { AxiosResponse } from "axios";
import { PayoutConfirmationsT } from "./types";
import { CryptochillBase } from "../base";
import { ResultT } from "../types";
export declare class Payouts extends CryptochillBase {
    listPayouts: () => Promise<unknown>;
    getPayout: (id: string) => Promise<unknown>;
    createPayout: (payload: any) => Promise<unknown>;
    approveOrRejectPayout: (id: string, isApprove: boolean) => Promise<unknown>;
    payoutConfirmations: (ids: string[]) => Promise<AxiosResponse<ResultT<PayoutConfirmationsT[]>>>;
}
