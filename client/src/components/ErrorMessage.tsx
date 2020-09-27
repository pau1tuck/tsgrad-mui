import React, { useEffect } from "react";
import { useAlert } from "react-alert";

interface IErrorMessage {
  errors: any;
  name: string;
}

const showAlert = useEffect(() => {
  const alert = useAlert();
  alert.show("Shite.");
});

export const ErrorMessage = ({ errors, name }: IErrorMessage) => {
  // Note: if you are using FormContext, then you can use Errors without props eg:
  // const { errors } = useFormContext();
  if (!errors[name]) return null;

  return <div>.</div>;
};
