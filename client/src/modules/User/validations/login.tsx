import * as yup from "yup";

export enum fieldNames {
  email = "email",
  password = "password",
}

export const validationSchema = yup.object().shape({
  [fieldNames.email]: yup
    .string()
    .email()
    .min(6)
    .max(30)
    .required()
    .label("This field"),
  [fieldNames.password]: yup
    .string()
    .min(8)
    .max(30)
    .required()
    .label("Password"),
});
