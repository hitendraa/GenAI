export type Coupon = {
  code: string | null;
  createdAt: Date;
  discountPercentage: number | null;
  expiryDate: Date | null;
  id: string;
  updatedAt: Date;
};
