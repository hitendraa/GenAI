import { Product } from "../product/Product";
import { User } from "../user/User";

export type Cart = {
  createdAt: Date;
  id: string;
  product?: Product | null;
  totalQuantity: number | null;
  updatedAt: Date;
  user?: User | null;
};
