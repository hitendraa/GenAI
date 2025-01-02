import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type GstWhereInput = {
  id?: StringFilter;
  rate?: FloatNullableFilter;
  typeField?: StringNullableFilter;
};
