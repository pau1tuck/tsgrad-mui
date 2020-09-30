import React from "react";
import { TextField } from "@material-ui/core";

interface iInput {
  type: string;
  register: any;
  autofocus?: boolean;
}

const Input = ({ type, register, autofocus }: iInput) => {
  let label = "";
  let autocomplete = "";
  switch (type) {
    case "firstName":
      label = "First name";
      autocomplete = "given-name";
      break;
    case "lastName":
      label = "Last name";
      autocomplete = "family-name";
      break;
    case "email":
      label = "Email address";
      autocomplete = "email";
      break;
    case "password":
      label = "Password";
      autocomplete = "current-password";
      break;
    default:
      label = type;
      autocomplete = type;
      break;
  }
  return (
    <TextField
      id={type}
      name={type}
      type={type}
      label={label}
      autoComplete={autocomplete}
      inputRef={register}
      required
      variant="outlined"
      margin="normal"
      fullWidth
      autoFocus={autofocus}
    />
  );
};

export default Input;
