import React, { useEffect, useState } from "react";
import { useApolloClient } from "@apollo/client";
import { useHistory } from "react-router-dom";
import Cookie from "js-cookie";
import { Link as RouterLink } from "react-router-dom";
import checkAuth from "../modules/User/hooks/checkAuth";

import NotificationsIcon from "@material-ui/icons/Notifications";
import PersonIcon from "@material-ui/icons/Person";
import { useUserQuery } from "../config/graphql";

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
  const history = useHistory();

  const logOut = () => {
    console.log("Logging out");
    client.resetStore();
    localStorage.clear();
    Cookie.remove("jwttoken");
    history.push("/");
  };

  const guestLinks = (
    <>
      <Button className={classes.button}>
        <Link component={RouterLink} to="/login" className={classes.link}>
          Log in
        </Link>
      </Button>
      <Button variant="contained" color="secondary" className={classes.button}>
        <Link component={RouterLink} to="/register" className={classes.link}>
          Sign up
        </Link>
      </Button>
    </>
  );

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
          {!!Cookie.get("jwttoken") ? (
            <div>
              <Button
                onClick={logOut}
                variant="outlined"
                className={classes.button}
              >
                Log out
              </Button>
            </div>
          ) : (
            <div>{guestLinks}</div>
          )}
        </Toolbar>
      </AppBar>
    </header>
  );
};
