import { SortOrder } from "../../util/SortOrder";

export type PaymentOrderByInput = {
  amountPaid?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  paymentMethod?: SortOrder;
  transactionId?: SortOrder;
  updatedAt?: SortOrder;
};
