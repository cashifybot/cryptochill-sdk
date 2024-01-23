import { AxiosResponse } from "axios";
import { CryptochillBase } from "../base";
import {
  CreateInvoicePayloadT,
  GetInvoicesParamsT,
  InvoiceListT,
  InvoiceT,
} from "./invoicesTypes";
import { ResultT } from "../types";

const endpoint = "invoices";

export class Invoices extends CryptochillBase {
  listInvoices(
    params?: GetInvoicesParamsT
  ): Promise<AxiosResponse<ResultT<InvoiceListT[]>>> {
    const queryParams = new URLSearchParams();
    if (queryParams && params) {
      Object.entries(params).forEach((item) => {
        if (item[1] !== undefined) {
          queryParams.set(item[0], item[1].toString());
        }
      });
    }
    return this.cryptochillApiRequest(endpoint + `?${queryParams}`);
  }

  getInvoice(id: string): Promise<AxiosResponse<ResultT<InvoiceListT>>> {
    return this.cryptochillApiRequest(endpoint + `/${id}`);
  }

  createInvoice(
    payload: CreateInvoicePayloadT
  ): Promise<AxiosResponse<ResultT<InvoiceT>>> {
    return this.cryptochillApiRequest(endpoint, payload, "POST");
  }
}
