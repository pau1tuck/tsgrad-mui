import React, { useEffect, useState } from "react";
import { Link as RouterLink, useHistory } from "react-router-dom";

import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import {
  Avatar,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Link,
  TextField,
  Typography,
  Zoom,
} from "@material-ui/core";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Input from "./Input";
import { useForm, Controller } from "react-hook-form";
import { fieldNames, validationSchema } from "../validations/login";
import { useLoginMutation } from "../../../config/graphql";
import { useAuthToken } from "../hooks/useAuthToken";
import { ErrorMessage } from "../../../components/ErrorMessage";
import { useAlert } from "react-alert";
import { gql, useApolloClient } from "@apollo/client";

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

export const LoginForm: React.FC = () => {
  const classes = useStyles();
  const [Login, { loading, error }] = useLoginMutation();
  const { register, handleSubmit, errors, control } = useForm({
    validationSchema,
    mode: "onChange",
  });
  const { setAuthCookie } = useAuthToken();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const client = useApolloClient();

  const onFormSubmit = async (values: any) => {
    const { email, password } = values;
    const response = await Login({
      variables: {
        email,
        password,
      },
    });

    if (response && response.data) {
      const jwtToken = response.data.login?.token;
      console.log("Login response: " + response.data);
      if (jwtToken) {
        setAuthCookie(jwtToken);
        client.writeFragment({
          id: "5",
          fragment: gql`
            fragment MyTodo on me {
              completed
            }
          `,
          data: {
            completed: true,
          },
        });
      }
    }
  };

  return (
    <>
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>

      <form
        className={classes.form}
        noValidate
        onSubmit={handleSubmit(onFormSubmit)}
      >
        <Input type="email" register={register} autofocus />
        <ErrorMessage errors={errors} type={fieldNames.email} />
        <Input type="password" register={register} />
        <ErrorMessage errors={errors} type={fieldNames.password} />

        <FormControlLabel
          control={
            <Controller
              as={Checkbox}
              control={control}
              defaultValue={false}
              name="remember-me"
              color="primary"
            />
          }
          label="Remember me"
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          className={classes.submit}
        >
          Sign in
        </Button>
        <Grid container className={classes.options}>
          <Grid item xs>
            <Link component={RouterLink} to="/forgot" variant="body2">
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link component={RouterLink} to="/register" variant="body2">
              Don't have an account? Sign up
            </Link>
          </Grid>
        </Grid>
      </form>
    </>
  );
};
