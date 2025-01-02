import { CartUpdateManyWithoutProductsInput } from "./CartUpdateManyWithoutProductsInput";
import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { InventoryUpdateManyWithoutProductsInput } from "./InventoryUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  carts?: CartUpdateManyWithoutProductsInput;
  category?: CategoryWhereUniqueInput | null;
  description?: string | null;
  inventories?: InventoryUpdateManyWithoutProductsInput;
  name?: string | null;
  price?: number | null;
  stock?: number | null;
};
