import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type CouponWhereInput = {
  code?: StringNullableFilter;
  discountPercentage?: FloatNullableFilter;
  expiryDate?: DateTimeNullableFilter;
  id?: StringFilter;
};
