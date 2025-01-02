import { SortOrder } from "../../util/SortOrder";

export type CouponOrderByInput = {
  code?: SortOrder;
  createdAt?: SortOrder;
  discountPercentage?: SortOrder;
  expiryDate?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
