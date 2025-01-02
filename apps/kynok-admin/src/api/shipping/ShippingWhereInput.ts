import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ShippingWhereInput = {
  address?: StringNullableFilter;
  city?: StringNullableFilter;
  country?: StringNullableFilter;
  id?: StringFilter;
  postalCode?: StringNullableFilter;
  shippingMethod?: StringNullableFilter;
};
