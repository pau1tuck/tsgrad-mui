import React from "react";
import { useMutation, useLazyQuery } from "@apollo/client";
import { useDebouncedCallback } from "use-debounce";
import { Input, Button, message as antdMessage } from "antd";
import { useForm } from "react-hook-form";
import { validationSchema } from "./loginValidations";
import { REGISTER } from "./gql";
import ErrorMessage from "../../../components/ErrorMessage";
import Message from "../../../components/Message";
import useAuthUser from "hooks/useAuthUser";

enum fieldNames {
  email = "email",
  password = "password",
}

const RegisterForm = () => {
  const { setAuthUser } = useAuthUser();
  const [registerUser, { loading: isRegistering, error }] = useMutation(
    REGISTER
  );
  const { register, handleSubmit, setValue, errors } = useForm({
    validationSchema,
    mode: "onBlur",
    reValidateMode: "onSubmit",
  });

  React.useEffect(() => {
    if (error) {
      antdMessage.error(error.message);
    }
  }, [error]);

  React.useEffect(() => {
    Object.keys(fieldNames).forEach((key) => {
      register({ name: key });
    });
  });

  const onFormSubmit = async (values: any) => {
    const { email, password } = values;
    const response: any = await registerUser({
      variables: {
        email,
        password,
      },
    });

    if (response) {
      const token =
        response &&
        response.data &&
        response.data.register &&
        response.data.register.token;

      if (token) {
        setAuthUser(token);
      }
    }
  };

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(fieldNames.email, e.target.value);
  };

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <h2>Register</h2>
      <Input
        onChange={(e) => setValue(fieldNames.email, e.target.value)}
        name={fieldNames.email}
        placeholder="Email"
      />
      <ErrorMessage errors={errors} name={fieldNames.email} />
      <Input
        type="password"
        onChange={(e) => setValue(fieldNames.password, e.target.value)}
        name={fieldNames.password}
        placeholder="Password"
      />
      <ErrorMessage errors={errors} name={fieldNames.password} />
      <Button block type="primary" htmlType="submit" loading={isRegistering}>
        Sign up
      </Button>
    </form>
  );
};

export default RegisterForm;
