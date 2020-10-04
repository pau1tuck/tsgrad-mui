import React, { useState } from "react";
import { Link as RouterLink, useHistory } from "react-router-dom";
import { useApolloClient } from "@apollo/client";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  IconButton,
  Link,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { useMeQuery } from "../../config/graphql";
import Cookie from "js-cookie";
import { LogoutButton } from "./LogoutButton";
import { Loading } from "../Loading";
import { AvatarButton } from "./AvatarButton";

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
    brand: {
      flexGrow: 1,
      color: palette.primary.contrastText,
      "&:hover": {
        textDecoration: "none",
      },
    },
    title: {
      textDecoration: "none",
    },
    message: { paddingRight: "10px", fontWeight: 700 },

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

export const Header = () => {
  const classes = useStyles();
  const { loading, error, data } = useMeQuery({
    fetchPolicy: "cache-and-network",
  });

  const [isLoggedIn, setIsLoggedIn] = useState(!!Cookie.get("jwttoken"));

  if (loading) return null;
  if (error || !data) {
    return <div>Error...</div>;
  }
  const userData = data?.me;
  return (
    <header className={classes.header}>
      <AppBar position="absolute" className={classes.appBar}>
        <Toolbar>
          <Link component={RouterLink} to="/" className={classes.brand}>
            <Typography component="h1" variant="h4" color="inherit" noWrap>
              MATERIAL-UI
            </Typography>
          </Link>
          {!isLoggedIn ? (
            <Box>
              <Button className={classes.button}>
                <Link
                  component={RouterLink}
                  to="/login"
                  className={classes.link}
                >
                  Log in
                </Link>
              </Button>
              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
              >
                <Link
                  component={RouterLink}
                  to="/register"
                  className={classes.link}
                >
                  Sign up
                </Link>
              </Button>
            </Box>
          ) : (
            <Box>
              <span className={classes.message}>
                Welcome, {data?.me?.firstName}.
              </span>
              <AvatarButton src="/static/client/assets/images/1.jpeg" />
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </header>
  );
};

//<Box mr={2}>Welcome, {userData.me.firstName}.</Box>
