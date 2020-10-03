import * as yup from "yup";

export enum fieldNames {
  firstName = "firstName",
  lastName = "lastName",
  email = "email",
  password = "password",
}

export const validationSchema = yup.object().shape({
  [fieldNames.firstName]: yup.string().required().label("First name"),
  [fieldNames.lastName]: yup.string().required().label("Last name"),
  [fieldNames.email]: yup.string().email().required().label("Email address"),
  [fieldNames.password]: yup
    .string()
    .min(8)
    .max(30)
    .required()
    .label("Password"),
});
