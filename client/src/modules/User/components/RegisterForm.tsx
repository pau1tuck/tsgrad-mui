import React, { useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { Link as RouterLink, useHistory } from "react-router-dom";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import {
  Avatar,
  Button,
  Grid,
  Link,
  Typography,
  Zoom,
} from "@material-ui/core";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import Input from "./Input";
import { useForm, Controller } from "react-hook-form";
import { fieldNames, validationSchema } from "../validations/register";
import { useRegisterMutation } from "../../../config/graphql";

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

export const RegisterForm: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();

  const [register, { loading, error }] = useRegisterMutation();
  const { register: rhform, errors, control, handleSubmit } = useForm({
    validationSchema,
    mode: "onBlur",
    reValidateMode: "onSubmit",
  });

  const onFormSubmit = async (values: any) => {
    const { firstName, lastName, email, password } = values;
    const response = await register({
      variables: {
        firstName,
        lastName,
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
        <Input type="firstName" register={rhform} autofocus />
        <Input type="lastName" register={rhform} />
        <Input type="email" register={rhform} />
        <Input type="password" register={rhform} />
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
