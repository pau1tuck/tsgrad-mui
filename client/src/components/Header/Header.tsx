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
import { HeaderButtons } from "./HeaderButtons";

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
  })
);

export const Header = () => {
  const classes = useStyles();

  return (
    <header className={classes.header}>
      <AppBar position="absolute" className={classes.appBar}>
        <Toolbar>
          <Link component={RouterLink} to="/" className={classes.brand}>
            <Typography component="h1" variant="h4" color="inherit" noWrap>
              MATERIAL-UI
            </Typography>
          </Link>
          <HeaderButtons />
        </Toolbar>
      </AppBar>
    </header>
  );
};
