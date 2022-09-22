import React from "react";
import Input from "../FormikType/Input";
import Textarea from "../FormikType/Textarea";
import Select from "../FormikType/Select";
import RadioButtons from "../FormikType/RadioButtons";
import CheckboxGroup from "../FormikType/CheckboxGroup";
import DatePicker from "../FormikType/DatePicker";

function FormikControl(props) {
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "textarea":
      return <Textarea {...rest} />;
    case "select":
      return <Select {...rest} />;
    case "radio":
      return <RadioButtons {...rest} />;
    case "checkbox":
      return <CheckboxGroup {...rest} />;
    case "date":
      return <DatePicker {...rest} />;
    default:
      return null;
  }
}

export default FormikControl;
