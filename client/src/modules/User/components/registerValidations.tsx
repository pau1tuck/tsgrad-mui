/*
 * VALIDATIONS
 * Object schema validation
 * @see https://github.com/jquense/yup
 */

import * as yup from "yup";

enum fieldNames {
  email = "email",
  password = "password",
}

export const validationSchema = yup.object().shape({
  [fieldNames.email]: yup.string().email().required().label("Email"),
  [fieldNames.password]: yup
    .string()
    .min(4)
    .max(30)
    .required()
    .label("Password"),
});
