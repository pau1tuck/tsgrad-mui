import * as yup from "yup";

export enum fieldNames {
  firstname = "firstname",
  lastname = "lastname",
  email = "email",
  password = "password",
}

export const validationSchema = yup.object().shape({
  [fieldNames.firstname]: yup.string().required().label("First name"),
  [fieldNames.lastname]: yup.string().required().label("Last name"),
  [fieldNames.email]: yup.string().email().required().label("Email address"),
  [fieldNames.password]: yup
    .string()
    .min(8)
    .max(30)
    .required()
    .label("Password"),
});
