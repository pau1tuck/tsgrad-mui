import React, { useEffect, useState } from "react";
import { Link as RouterLink, useHistory } from "react-router-dom";
import { useApolloClient, useQuery } from "@apollo/client";
import { isLoggedInVar } from "../../config/cache";
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
import { AvatarButton } from "./AvatarButton";
import { IS_LOGGED_IN } from "../Container";

const useStyles = makeStyles(({ palette }: Theme) =>
  createStyles({
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

export const HeaderButtons = () => {
  const classes = useStyles();

  const { data: IsLoggedInData } = useQuery(IS_LOGGED_IN);
  const isLoggedIn = IsLoggedInData.isLoggedIn;

  const [user, setUser] = useState({});

  const { data } = useMeQuery({
    fetchPolicy: "cache-and-network",
  });

  useEffect(() => {
    if (data?.me) {
      setUser(data.me);
    }
  }, [data]);

  return (
    <>
      {isLoggedIn ? (
        <Box>
          <span className={classes.message}>Welcome, {user.firstName}.</span>
          <AvatarButton src="/static/client/assets/images/1.jpeg" />
        </Box>
      ) : (
        <Box>
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
            <Link
              component={RouterLink}
              to="/register"
              className={classes.link}
            >
              Sign up
            </Link>
          </Button>
        </Box>
      )}
    </>
  );
};
