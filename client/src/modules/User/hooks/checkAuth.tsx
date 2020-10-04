import React from "react";
import { useApolloClient } from "@apollo/client";
import Cookie from "js-cookie";
import { useMeQuery } from "../../../config/graphql";

export const checkAuth = () => {
  const loggedIn = Boolean(Cookie.get("jwttoken"));

  if (!loggedIn) {
    return false;
  }
  return true;
};
