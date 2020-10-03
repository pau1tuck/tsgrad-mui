import React, { useEffect, useState } from "react";
import { Link as RouterLink, useHistory } from "react-router-dom";
import * as yup from "yup";
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
import { useForgotPasswordMutation } from "../../../config/graphql";
import { ErrorMessage } from "../../../components/ErrorMessage";
import { useAlert } from "react-alert";
import { gql, useApolloClient } from "@apollo/client";

const useStyles = makeStyles(({ spacing, palette }: Theme) =>
  createStyles({
    avatar: {
      margin: spacing(1),
      backgroundColor: palette.secondary.main,
    },
    form: {
      width: "100%", // Fixes IE 11 issue.
      marginTop: spacing(3),
    },
    message: {
      paddingBottom: spacing(2),
    },
    submit: { margin: spacing(4, 0, 2) },
  })
);

const validationSchema = yup.object().shape({
  ["email"]: yup.string().email().required().label("This field"),
});

export const ForgotPasswordForm: React.FC = () => {
  const classes = useStyles();
  const [ForgotPassword] = useForgotPasswordMutation();
  const { register, handleSubmit, errors, control } = useForm({
    validationSchema,
    mode: "onChange",
  });

  const [message, setMessage] = useState("Enter your email address");
  const [show, setShow] = useState(true);

  const onFormSubmit = async (values: any) => {
    console.log("Form submitted");
    const response = await ForgotPassword({
      variables: values,
    });
    if (response && response.data) {
      setShow(false);
      if (response.data.sendPasswordResetEmail?.errors) {
        setMessage("Error: " + response.data.sendPasswordResetEmail?.errors);
      } else {
        console.log("Success!");
        setMessage("Please check your inbox 📨");
      }
    }
  };

  return (
    <>
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Account recovery
      </Typography>

      <form
        className={classes.form}
        noValidate
        onSubmit={handleSubmit(onFormSubmit)}
      >
        <Typography
          component="p"
          variant="body1"
          align="center"
          className={classes.message}
        >
          {message}
        </Typography>
        {show && <Input type="email" register={register} autofocus />}

        {show && (
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            className={classes.submit}
          >
            Submit
          </Button>
        )}
      </form>
    </>
  );
};
