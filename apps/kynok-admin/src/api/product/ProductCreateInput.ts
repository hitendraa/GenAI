import { CartCreateNestedManyWithoutProductsInput } from "./CartCreateNestedManyWithoutProductsInput";
import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { InventoryCreateNestedManyWithoutProductsInput } from "./InventoryCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  carts?: CartCreateNestedManyWithoutProductsInput;
  category?: CategoryWhereUniqueInput | null;
  description?: string | null;
  inventories?: InventoryCreateNestedManyWithoutProductsInput;
  name?: string | null;
  price?: number | null;
  stock?: number | null;
};
