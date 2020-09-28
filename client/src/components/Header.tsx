import React from "react";
import { Link as RouterLink } from "react-router-dom";
import checkAuth from "../modules/User/hooks/checkAuth";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { AppBar, Button, Link, Toolbar, Typography } from "@material-ui/core";
import NotificationsIcon from "@material-ui/icons/Notifications";
import PersonIcon from "@material-ui/icons/Person";

const useStyles = makeStyles(({ palette }: Theme) =>
  createStyles({
    root: {
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
    },
    link: {
      color: palette.primary.contrastText,
    },
  })
);

export const Header = () => {
  const classes = useStyles();
  const loggedIn = checkAuth();

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
    <header className={classes.root}>
      <AppBar position="absolute" className={classes.appBar}>
        <Toolbar>
          <Typography
            component="h1"
            variant="h4"
            color="inherit"
            noWrap
            className={classes.brand}
          >
            TSGRAD
          </Typography>
          {loggedIn ? (
            <div
              className="ml1 pointer black"
              onClick={() => {
                console.log("Log out");
                //this.props.history.push(`/`);
              }}
            >
              <Button className={classes.button}>
                <Link component={RouterLink} to="/" className={classes.link}>
                  Log out
                  {console.log(loggedIn)}
                </Link>
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
