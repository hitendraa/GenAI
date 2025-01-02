import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const ShippingCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="address" source="address" />
        <TextInput label="city" source="city" />
        <TextInput label="country" source="country" />
        <TextInput label="postalCode" source="postalCode" />
        <TextInput label="shippingMethod" source="shippingMethod" />
      </SimpleForm>
    </Create>
  );
};
