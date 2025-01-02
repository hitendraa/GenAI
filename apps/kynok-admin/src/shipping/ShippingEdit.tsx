import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const ShippingEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="address" source="address" />
        <TextInput label="city" source="city" />
        <TextInput label="country" source="country" />
        <TextInput label="postalCode" source="postalCode" />
        <TextInput label="shippingMethod" source="shippingMethod" />
      </SimpleForm>
    </Edit>
  );
};
