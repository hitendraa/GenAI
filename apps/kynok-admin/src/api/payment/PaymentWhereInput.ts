import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type PaymentWhereInput = {
  amountPaid?: FloatNullableFilter;
  id?: StringFilter;
  paymentMethod?: StringNullableFilter;
  transactionId?: StringNullableFilter;
};
