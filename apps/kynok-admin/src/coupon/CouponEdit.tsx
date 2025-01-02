import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const CouponEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="code" source="code" />
        <NumberInput label="discountPercentage" source="discountPercentage" />
        <DateTimeInput label="expiryDate" source="expiryDate" />
      </SimpleForm>
    </Edit>
  );
};
