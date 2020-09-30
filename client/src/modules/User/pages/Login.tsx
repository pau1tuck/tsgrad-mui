import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Container, Paper } from "@material-ui/core";
import checkAuth from "../hooks/checkAuth";
import { ROUTES } from "../../../config/routes";
import { Page } from "../../../components/Page";
import LoginForm from "../components/LoginForm";
import { GoogleAuthButton } from "../components/GoogleAuthButton";
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

const Login = () => {
  const classes = useStyles();
  const loggedIn = checkAuth();
  const history = useHistory();

  useEffect(() => {
    if (loggedIn) {
      console.log("Logged in:" + loggedIn);
      history.push(ROUTES.dashboard);
    }
  }, []);
  return (
    <Page>
      <Container component="main" maxWidth="xs">
        <Paper elevation={3} className={classes.paper}>
          <LoginForm />
          <br></br>
          <GoogleAuthButton>
            <img
              src="/static/client/assets/images/google-icon.png"
              width="20px"
              height="20px"
            ></img>
            &nbsp;&nbsp; Log in with Google
          </GoogleAuthButton>
        </Paper>
      </Container>
      <Footer />
    </Page>
  );
};

export default Login;
