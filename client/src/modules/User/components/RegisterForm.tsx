import React, { useState } from "react";
import { Link as RouterLink, useHistory } from "react-router-dom";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import {
  Avatar,
  Button,
  Grid,
  Link,
  TextField,
  Typography,
  Zoom,
} from "@material-ui/core";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import { message as antdMessage } from "antd";
import { useForm, Controller } from "react-hook-form";
import { validationSchema } from "../validations/register";
import ErrorMessage from "../../../components/ErrorMessage";
import { useRegisterMutation } from "../../../config/graphql";
import useAuthToken from "../hooks/useAuthToken";

const useStyles = makeStyles(({ spacing, palette }: Theme) =>
  createStyles({
    paper: {
      marginTop: spacing(4),
      padding: spacing(5),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    avatar: {
      margin: spacing(1),
      backgroundColor: palette.secondary.main,
    },
    form: {
      width: "100%", // Fixes IE 11 issue.
      marginTop: spacing(3),
    },
    submit: { margin: spacing(3, 0, 2) },
    options: {
      justifyContent: "center",
    },
  })
);

enum fieldNames {
  firstname = "firstname",
  lastname = "lastname",
  email = "email",
  password = "password",
}

export const RegisterForm: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();

  const [createUser, { loading, error }] = useRegisterMutation();
  const { register, errors, control, handleSubmit } = useForm({
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
    const { firstname, lastname, email, password } = values;
    const response = await createUser({
      variables: {
        firstname,
        lastname,
        email,
        password,
      },
    });

    console.log("Form submitted");
    console.log(response);
    history.push("/verify");
  };

  return (
    <>
      <Avatar className={classes.avatar}>
        <AccountCircleOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign up
      </Typography>
      <form
        className={classes.form}
        noValidate
        onSubmit={handleSubmit(onFormSubmit)}
      >
        <TextField
          id={fieldNames.firstname}
          name={fieldNames.firstname}
          type={fieldNames.firstname}
          autoComplete={fieldNames.firstname}
          inputRef={register}
          label="Email address"
          required
          variant="outlined"
          margin="normal"
          fullWidth
          autoFocus
        />
        <ErrorMessage errors={errors} name={fieldNames.lastname} />
        <TextField
          id={fieldNames.lastname}
          name={fieldNames.lastname}
          type={fieldNames.lastname}
          autoComplete={fieldNames.lastname}
          inputRef={register}
          label="Email address"
          required
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <ErrorMessage errors={errors} name={fieldNames.email} />
        <TextField
          id={fieldNames.email}
          name={fieldNames.email}
          type={fieldNames.email}
          autoComplete={fieldNames.email}
          inputRef={register}
          label="Email address"
          required
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <ErrorMessage errors={errors} name={fieldNames.email} />
        <TextField
          id={fieldNames.password}
          name={fieldNames.password}
          type={fieldNames.password}
          autoComplete="current-password"
          inputRef={register}
          label="Password"
          required
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <ErrorMessage errors={errors} name={fieldNames.password} />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          className={classes.submit}
        >
          Sign up
        </Button>
        <Grid container className={classes.options}>
          <Grid item>
            <Link component={RouterLink} to="/login" variant="body2">
              Already have an account? Sign in
            </Link>
          </Grid>
        </Grid>
      </form>
    </>
  );
};
