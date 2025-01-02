import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const GstEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="rate" source="rate" />
        <TextInput label="type" source="typeField" />
      </SimpleForm>
    </Edit>
  );
};
