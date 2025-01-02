import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CartUpdateInput = {
  product?: ProductWhereUniqueInput | null;
  totalQuantity?: number | null;
  user?: UserWhereUniqueInput | null;
};
