export type Payment = {
  amountPaid: number | null;
  createdAt: Date;
  id: string;
  paymentMethod: string | null;
  transactionId: string | null;
  updatedAt: Date;
};
