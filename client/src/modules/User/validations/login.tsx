import * as yup from "yup";

enum fieldNames {
  email = "email",
  password = "password",
}

export const validationSchema = yup.object().shape({
  [fieldNames.email]: yup
    .string()
    .min(6)
    .max(30)
    .required()
    .label("Email address"),
  [fieldNames.password]: yup
    .string()
    .min(8)
    .max(30)
    .required()
    .label("Password"),
});
