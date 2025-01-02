import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type InventoryUpdateInput = {
  product?: ProductWhereUniqueInput | null;
  quantityAvailable?: number | null;
};
