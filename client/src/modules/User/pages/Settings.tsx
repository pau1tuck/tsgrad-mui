import React from "react";
import { useMeQuery, useChangePasswordMutation } from "../../../config/graphql";
import { useForm, Controller } from "react-hook-form";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import {
  Box,
  Button,
  Container,
  Divider,
  Input,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import { Page } from "../../../components/Page";
import { ChangePasswordForm } from "../components/ChangePasswordForm";

const useStyles = makeStyles(({ palette, spacing }: Theme) =>
  createStyles({
    paper: {
      marginTop: spacing(4),
      padding: spacing(5),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    light: {
      color: palette.secondary.dark,
    },
    label: {
      marginTop: spacing(3),
      marginBottom: spacing(1),
    },
    submit: {
      marginTop: spacing(1),
    },
  })
);

const Settings = () => {
  const classes = useStyles();
  const {
    loading: loadingUser,
    error: userError,
    data: userData,
  } = useMeQuery();

  if (loadingUser) return null;
  if (userError || !userData) {
    return <div>Error...</div>;
  }
  const user = userData?.me;
  return (
    <Page>
      <Container component="main" maxWidth="lg">
        <Paper elevation={6}>
          <Box p={4}>
            <Typography component="h1" variant="h4">
              <SettingsOutlinedIcon /> Settings
            </Typography>
            <br />
            <Typography component="h3" variant="h6">
              Update your email address
            </Typography>
            <br />
            <Typography component="p" variant="body1">
              Your email is currently&nbsp;
              <span className={classes.light}>{user?.email}.</span>
            </Typography>
            <form noValidate>
              <Typography
                component="p"
                variant="body2"
                className={classes.label}
              >
                NEW EMAIL ADDRESS:
              </Typography>
              <TextField type="email" />
              <Typography
                component="p"
                variant="body2"
                className={classes.label}
              >
                CONFIRM PASSWORD:
              </Typography>
              <TextField type="password" autoComplete="current-password" />
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
            <br />
            <Divider />
            <br />
            <ChangePasswordForm />
            <br />
            <Divider />
            <br />
            <Typography component="h3" variant="h6">
              Delete your account
            </Typography>
            <br />
            <Typography component="p" variant="body1">
              WARNING! This will permanently delete all of your data and cannot
              be undone.
            </Typography>
            <br />
            <Button type="submit" variant="contained" color="secondary">
              Delete account
            </Button>
            <br />
            <br />
          </Box>
        </Paper>
      </Container>
    </Page>
  );
};

export default Settings;
