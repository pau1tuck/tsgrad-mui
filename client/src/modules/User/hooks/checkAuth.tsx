import React from "react";
import { useApolloClient } from "@apollo/client";
import Cookie from "js-cookie";
import { useMeQuery } from "../../../config/graphql";
import { isLoggedInVar } from "../../../config/cache";

export const checkAuth = () => {
  const loggedIn = Boolean(Cookie.get("jwttoken"));

  console.log("isLoggedInVar: " + isLoggedInVar());

  if (!loggedIn) {
    return false;
  }
  return true;
};
