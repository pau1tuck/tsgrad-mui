import React from "react";
import { Link as RouterLink } from "react-router-dom";

import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import {
  Avatar,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  Link,
  Paper,
  TextField,
  Typography,
  Zoom,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { message as antdMessage } from "antd";
import { useForm, Controller } from "react-hook-form";
import { validationSchema } from "../validations/login";
import ErrorMessage from "../../../components/ErrorMessage";
import { useLoginMutation } from "../../../config/graphql";
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
  email = "email",
  password = "password",
}

export const LoginForm: React.FC = () => {
  const classes = useStyles();
  const [login] = useLoginMutation();
  const { register, handleSubmit, errors, control } = useForm({
    validationSchema,
    mode: "onChange",
  });
  const { setAuthCookie } = useAuthToken();

  const onFormSubmit = async (values: any) => {
    const { email, password } = values;
    const response = await login({
      variables: {
        email,
        password,
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
          autoFocus
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
            <Link component={RouterLink} to="/" variant="body2">
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

export default LoginForm;
