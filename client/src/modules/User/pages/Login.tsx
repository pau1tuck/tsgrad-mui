import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Container, Paper } from "@material-ui/core";
import { LoginForm } from "../components/LoginForm";
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
