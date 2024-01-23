import { AxiosResponse } from "axios";
import { CryptochillBase } from "../base";
import { CreateInvoicePayloadT, GetInvoicesParamsT, InvoiceListT, InvoiceT } from "./invoicesTypes";
import { ResultT } from "../types";
export declare class Invoices extends CryptochillBase {
    listInvoices(params?: GetInvoicesParamsT): Promise<AxiosResponse<ResultT<InvoiceListT[]>>>;
    getInvoice(id: string): Promise<AxiosResponse<ResultT<InvoiceListT>>>;
    createInvoice(payload: CreateInvoicePayloadT): Promise<AxiosResponse<ResultT<InvoiceT>>>;
}
