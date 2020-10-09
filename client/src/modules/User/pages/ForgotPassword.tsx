import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Container, Paper } from "@material-ui/core";
import { checkAuth } from "../hooks/checkAuth";
import { ForgotPasswordForm } from "../components/ForgotPasswordForm";
import { Footer } from "../../../components/Footer";

const useStyles = makeStyles(({ spacing }: Theme) =>
  createStyles({
    paper: {
      marginTop: spacing(4),
      padding: spacing(5),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  })
);

const ForgotPassword = () => {
  const classes = useStyles();
  const loggedIn = checkAuth();
  const history = useHistory();

  useEffect(() => {
    if (loggedIn) {
      console.log("Logged in:" + loggedIn);
      history.push("/dashboard");
    }
  }, []);
  return (
    <>
      <Container component="main" maxWidth="xs">
        <Paper elevation={3} className={classes.paper}>
          <ForgotPasswordForm />
        </Paper>
      </Container>
      <Footer />
    </>
  );
};

export default ForgotPassword;
