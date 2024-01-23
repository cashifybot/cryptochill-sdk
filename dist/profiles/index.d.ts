import { AxiosResponse } from "axios";
import { ProfileT } from "./types";
import { CryptochillBase } from "../base";
import { ResultT } from "../types";
export declare class Profiles extends CryptochillBase {
    listProfiles: () => Promise<AxiosResponse<ResultT<ProfileT[]>>>;
    getProfile: (id: string) => Promise<AxiosResponse<ResultT<ProfileT>>>;
}
