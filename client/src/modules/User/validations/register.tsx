import * as yup from "yup";

enum fieldNames {
  firstname = "firstname",
  lastname = "lastname",
  email = "email",
  password = "password",
}

export const validationSchema = yup.object().shape({
  [fieldNames.firstname]: yup.string().email().required().label("First name"),
  [fieldNames.lastname]: yup.string().email().required().label("Last name"),
  [fieldNames.email]: yup.string().email().required().label("Email"),
  [fieldNames.password]: yup
    .string()
    .min(4)
    .max(30)
    .required()
    .label("Password"),
});
