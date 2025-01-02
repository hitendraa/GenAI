import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const PaymentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="amountPaid" source="amountPaid" />
        <TextInput label="paymentMethod" source="paymentMethod" />
        <TextInput label="transactionId" source="transactionId" />
      </SimpleForm>
    </Create>
  );
};
