import React from "react";
import { useHistory } from "react-router-dom";
import { useApolloClient } from "@apollo/client";
import Cookie from "js-cookie";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

const useStyles = makeStyles(({ palette }: Theme) =>
  createStyles({
    button: {
      marginLeft: "10px",
      fontWeight: 700,
      color: palette.primary.contrastText,
    },
  })
);

export const LogoutButton = () => {
  const classes = useStyles();
  const client = useApolloClient();
  const history = useHistory();

  return (
    <Button
      onClick={async () => {
        await client.clearStore();
        await client.resetStore();
        Cookie.remove("jwttoken");
        Cookie.remove("refreshtoken");
        history.push("/");
      }}
      variant="outlined"
      className={classes.button}
    >
      Log out
    </Button>
  );
};
