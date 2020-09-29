import React from "react";
import { Link as RouterLink } from "react-router-dom";
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
import { useUserQuery } from "../config/graphql";
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

interface NavBarProps {}

export const Header: React.FC<NavBarProps> = ({}) => {
  const classes = useStyles();
  const client = useApolloClient();
  const { data, loading } = useUserQuery();

  let body = null;

  if (loading) {
    // No user data present:
  } else if (!data?.user) {
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
    body = (
      <>
        <Box mr={2}>Welcome {data.user.firstname}</Box>
        <Button
          onClick={async () => {
            await client.resetStore();
            Cookie.remove("jwttoken");
          }}
          variant="outlined"
          className={classes.button}
        >
          Log out
        </Button>
      </>
    );
  }

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
            TSGRAD-MUI
          </Typography>
          <Box>{body}</Box>
        </Toolbar>
      </AppBar>
    </header>
  );
};
