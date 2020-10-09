import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { useApolloClient, gql } from "@apollo/client";
import { isLoggedInVar } from "../config/cache";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import {
  Box,
  Container as MuiContainer,
  Grid,
  Link,
  Typography,
} from "@material-ui/core";
import Cookie from "js-cookie";
import { Header } from "./Header/Header";

const useStyles = makeStyles(({ spacing, mixins }: Theme) =>
  createStyles({
    page: {
      flexGrow: 1,
      overflow: "auto",
      paddingTop: spacing(3),
      paddingBottom: spacing(4),
    },
    navbarSpacer: mixins.toolbar,
    content: {
      paddingTop: spacing(3),
      paddingBottom: spacing(4),
    },
  })
);

export const IS_LOGGED_IN = gql`
  query IsLoggedIn {
    isLoggedIn @client
  }
`;

export const Container = ({ children }: any) => {
  const classes = useStyles();

  if (Cookie.get("jwttoken")) {
    isLoggedInVar(true);
  }
  console.log("Initialising: " + isLoggedInVar());
  return (
    <div>
      <Header />
      <main className={classes.page}>
        <div className={classes.navbarSpacer} />
        <MuiContainer className={classes.content} maxWidth="md">
          <Grid container direction="row" justify="center" alignItems="center">
            <Link
              href="https://github.com/pau1tuck/tsgrad-mui"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Typography>
                TSGRAD-MUI: GraphQL, React, Apollo Client, and Python Django
                boilerplate with TypeScript and Material-UI
              </Typography>
            </Link>
            <br></br>
          </Grid>
          <br />
          {children}
        </MuiContainer>
      </main>
    </div>
  );
};
