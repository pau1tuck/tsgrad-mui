import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Input, Button, message as antdMessage } from "antd";
import { useForm } from "react-hook-form";
import { validationSchema } from "./loginValidations";
import { useRegisterMutation } from "../../../config/graphql";
import ErrorMessage from "../../../components/ErrorMessage";

enum fieldNames {
  firstname = "firstName",
  lastname = "lastName",
  email = "email",
  password = "password",
}

export const RegisterForm: React.FC = () => {
  const history = useHistory();
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [createUser, { loading: isRegistering, error }] = useRegisterMutation();
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

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        console.log("Form submitted");
        const response = await createUser({
          variables: {
            firstname,
            lastname,
            email,
            password,
          },
        });
        console.log(response);
        history.push("/my");
      }}
    >
      <Input
        value={firstname}
        placeholder="First name"
        onChange={(e) => {
          setFirstName(e.target.value);
        }}
      />
      <Input
        value={lastname}
        placeholder="Last name"
        onChange={(e) => {
          setLastName(e.target.value);
        }}
      />
      <Input
        value={email}
        placeholder="email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <Input
        value={password}
        type="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <ErrorMessage errors={errors} name={fieldNames.password} />
      <Button block type="primary" htmlType="submit" loading={isRegistering}>
        Sign up
      </Button>
    </form>
  );
};
