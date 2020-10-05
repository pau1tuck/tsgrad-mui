import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Button, TextField, Typography } from "@material-ui/core";
import * as yup from "yup";
import { useChangePasswordMutation } from "../../../config/graphql";
import { useForm } from "react-hook-form";
import { validationSchema } from "../validations/password";
import { ErrorMessage } from "../../../components/ErrorMessage";

const useStyles = makeStyles(({ spacing, palette }: Theme) =>
  createStyles({
    label: {
      marginTop: spacing(3),
      marginBottom: spacing(1),
    },
    submit: {
      marginTop: spacing(1),
    },
  })
);

export const ChangePasswordForm = () => {
  const classes = useStyles();

  const [passwordChange, { loading, error }] = useChangePasswordMutation();

  const { register, errors, handleSubmit } = useForm({
    validationSchema,
    mode: "onBlur",
    reValidateMode: "onSubmit",
  });

  const onFormSubmit = async (values: any) => {
    const { password, newPassword } = values;
    const response = await passwordChange({
      variables: {
        password,
        newPassword,
      },
    });

    console.log("Form submitted");
    console.log(response);
  };

  return (
    <>
      <Typography component="h3" variant="h6">
        Change your password
      </Typography>
      <form noValidate onSubmit={handleSubmit(onFormSubmit)}>
        <Typography component="p" variant="body2" className={classes.label}>
          CURRENT PASSWORD:
        </Typography>
        <TextField
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          inputRef={register}
          required
        />
        <ErrorMessage errors={errors} type="password" />
        <Typography component="p" variant="body2" className={classes.label}>
          NEW PASSWORD:
        </Typography>
        <TextField
          id="newPassword"
          name="newPassword"
          type="password"
          inputRef={register}
          required
        />
        <ErrorMessage errors={errors} type="newPassword" />
        <Typography component="p" variant="body2" className={classes.label}>
          CONFIRM NEW PASSWORD:
        </Typography>
        <TextField
          id="newPassword2"
          name="newPassword2"
          type="password"
          inputRef={register}
          required
        />
        <ErrorMessage errors={errors} type="newPassword2" />
        <br />
        <br />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Submit
        </Button>
      </form>
    </>
  );
};
