import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const CouponCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="code" source="code" />
        <NumberInput label="discountPercentage" source="discountPercentage" />
        <DateTimeInput label="expiryDate" source="expiryDate" />
      </SimpleForm>
    </Create>
  );
};
