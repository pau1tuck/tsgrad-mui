import React from "react";
import { useHistory } from "react-router-dom";
import { ROUTES } from "../../../config/routes.config";
import { useMutation } from "@apollo/client";
import { Input, Button, message as antdMessage } from "antd";
import { useForm, Controller } from "react-hook-form";
import { validationSchema } from "./loginValidations";
import ErrorMessage from "../../../components/ErrorMessage";
import {
  useLoginMutation,
  UserQuery,
  UserDocument,
} from "../../../config/graphql";
import useAuthToken from "../hooks/useAuthToken";

enum fieldNames {
  email = "email",
  password = "password",
}

export const LoginForm: React.FC = () => {
  const { setAuthCookie } = useAuthToken();
  const { handleSubmit, errors, control } = useForm({
    validationSchema,
    mode: "onChange",
  });

  const [
    login,
    { loading: isLogining, error, data: loginData },
  ] = useLoginMutation();

  React.useEffect(() => {
    if (loginData) {
    }
  }, [loginData]);

  React.useEffect(() => {
    if (error) {
      antdMessage.error(error.message);
    }
  }, [error]);

  const onFormSubmit = async (values: any) => {
    const { email, password } = values;
    const response = await login({
      variables: {
        email,
        password,
      },
      update: (store, { data }) => {
        if (!data) {
          return null;
        }
        store.writeQuery<UserQuery>({
          query: UserDocument,
          data: {
            user: data.tokenAuth?.user,
          },
        });
      },
    });

    console.log(response);
    console.log("Form submitted");
    if (response && response.data) {
      const jwt = response.data.tokenAuth?.token;
      if (jwt) {
        setAuthCookie(jwt);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <h2>Log in</h2>
      <br />
      <Controller
        name={fieldNames.email}
        control={control}
        as={<Input placeholder="Email" />}
      />
      <ErrorMessage errors={errors} name={fieldNames.email} />
      <br />
      <Controller
        name={fieldNames.password}
        control={control}
        as={<Input type="password" placeholder="Password" />}
      />
      <br />
      <ErrorMessage errors={errors} name={fieldNames.password} />
      <Button block type="primary" htmlType="submit" loading={isLogining}>
        Log in
      </Button>
    </form>
  );
};

export default LoginForm;
