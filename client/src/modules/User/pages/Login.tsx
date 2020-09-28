import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Container, Paper } from "@material-ui/core";
import checkAuth from "../hooks/checkAuth";
import LoginForm from "../components/LoginForm";
import { Footer } from "../../../components/Footer";
import { ROUTES } from "../../../config/routes";

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
    <div>
      <Container component="main" maxWidth="xs">
        <Paper elevation={3} className={classes.paper}>
          <LoginForm />
          {/*<Footer />*/}
        </Paper>
      </Container>
      <Footer />
    </div>
  );
};

export default Login;
