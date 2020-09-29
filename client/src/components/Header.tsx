import React, { useEffect, useState } from "react";
import { Link as RouterLink, useHistory } from "react-router-dom";
import { useApolloClient } from "@apollo/client";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import {
  AppBar,
  Box,
  Button,
  Link,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { useMeQuery, useLogoutMutation } from "../config/graphql";
import Cookie from "js-cookie";

const useStyles = makeStyles(({ palette }: Theme) =>
  createStyles({
    header: {
      display: "flex",
      flexDirection: "column",
      backgroundColor: palette.background.default,
      color: palette.primary.main,
    },
    appBar: {
      background: "#1976d2",
    },
    brand: { flexGrow: 1 },
    button: {
      marginLeft: "10px",
      fontWeight: 700,
      color: palette.primary.contrastText,
    },
    link: {
      color: palette.primary.contrastText,
    },
  })
);

export const Header: React.FC = () => {
  const classes = useStyles();
  const client = useApolloClient();
  let { data: userData, loading: isLoading } = useMeQuery();
  const [logout, { loading: loggingOut }] = useLogoutMutation();
  const history = useHistory();

  let body = null;

  const [isLoggedIn, setIsLoggedIn] = useState(!!Cookie.get("jwttoken"));

  if (!isLoggedIn) {
    body = (
      <>
        <Button className={classes.button}>
          <Link component={RouterLink} to="/login" className={classes.link}>
            Log in
          </Link>
        </Button>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
        >
          <Link component={RouterLink} to="/register" className={classes.link}>
            Sign up
          </Link>
        </Button>
      </>
    );
    // User is logged in:
  } else {
    let refreshtoken: any = Cookie.get("refreshtoken");
    body = (
      <>
        <Button
          onClick={async () => {
            await client.resetStore();
            Cookie.remove("jwttoken");
            Cookie.remove("refreshtoken");
            userData = undefined;
            setIsLoggedIn(false);
            history.push("/");
          }}
          variant="outlined"
          className={classes.button}
        >
          Log out
        </Button>
      </>
    );
  }

  console.log("Header userdata: " + userData);
  console.log(isLoggedIn);

  return (
    <header className={classes.header}>
      <AppBar position="absolute" className={classes.appBar}>
        <Toolbar>
          <Typography
            component="h1"
            variant="h4"
            color="inherit"
            noWrap
            className={classes.brand}
          >
            Material-UI
          </Typography>
          <Box>{body}</Box>
        </Toolbar>
      </AppBar>
    </header>
  );
};

//<Box mr={2}>Welcome, {userData.me.firstName}.</Box>
