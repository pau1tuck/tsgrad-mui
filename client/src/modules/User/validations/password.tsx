import * as yup from "yup";

export const validationSchema = yup.object({
  password: yup.string().min(8).max(30).required().label("Current password"),
  newPassword: yup
    .string()
    .min(8)
    .max(30)
    .required("New password is required")
    .label("New password"),
  newPassword2: yup
    .string()
    .required("Please confirm new password")
    .oneOf([yup.ref("newPassword"), null], "Passwords do not match")
    .label("Password confirmation"),
});
