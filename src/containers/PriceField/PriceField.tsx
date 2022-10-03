import React from "react";
import InputField from "../../components/InputField/InputField";
import { IInputField } from "../../components/InputField/InputField.interfaces";

const PriceField = (props: IInputField) => {
  return <InputField {...props} />;
};

export default PriceField;
