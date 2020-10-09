import React from "react";
import { useHistory } from "react-router-dom";
import { useApolloClient } from "@apollo/client";
import Cookie from "js-cookie";
import { isLoggedInVar } from "../../config/cache";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Link } from "@material-ui/core";

const useStyles = makeStyles(({ palette }: Theme) =>
  createStyles({
    link: {
      color: "#262626",
      "&:hover": {
        textDecoration: "none",
      },
    },
  })
);

export const LogoutButton = ({ children }: any) => {
  const classes = useStyles();
  const client = useApolloClient();
  const history = useHistory();

  return (
    <Link
      onClick={async () => {
        await client.clearStore();
        await client.resetStore();
        Cookie.remove("jwttoken");
        isLoggedInVar(false);
        history.push("/");
      }}
      className={classes.link}
    >
      {children}
    </Link>
  );
};
