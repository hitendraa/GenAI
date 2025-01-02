import { Cart } from "../cart/Cart";
import { Category } from "../category/Category";
import { Inventory } from "../inventory/Inventory";

export type Product = {
  carts?: Array<Cart>;
  category?: Category | null;
  createdAt: Date;
  description: string | null;
  id: string;
  inventories?: Array<Inventory>;
  name: string | null;
  price: number | null;
  stock: number | null;
  updatedAt: Date;
};
