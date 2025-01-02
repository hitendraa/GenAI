import { Product } from "../product/Product";

export type Inventory = {
  createdAt: Date;
  id: string;
  product?: Product | null;
  quantityAvailable: number | null;
  updatedAt: Date;
};
