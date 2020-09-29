import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Box, Container, Grid, Link, Typography } from "@material-ui/core";
import { Header } from "./Header";

const useStyles = makeStyles(({ spacing, mixins }: Theme) =>
  createStyles({
    page: {
      flexGrow: 1,
      height: "100vh",
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

export const Page: React.FC = ({ children }) => {
  const classes = useStyles();
  return (
    <>
      <Header />
      <main className={classes.page}>
        <div className={classes.navbarSpacer} />
        <Container className={classes.content} maxWidth="md">
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
          {children}
        </Container>
      </main>
    </>
  );
};
