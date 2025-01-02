import { SortOrder } from "../../util/SortOrder";

export type ShippingOrderByInput = {
  address?: SortOrder;
  city?: SortOrder;
  country?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  postalCode?: SortOrder;
  shippingMethod?: SortOrder;
  updatedAt?: SortOrder;
};
