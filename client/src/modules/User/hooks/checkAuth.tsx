import React from "react";
import { useApolloClient } from "@apollo/client";
import Cookie from "js-cookie";
import { useMeQuery } from "../../../config/graphql";

const checkAuth = () => {
  const loggedIn = Boolean(Cookie.get("jwttoken"));

  if (!loggedIn) {
    console.log("Logged in? = false");
    return false;
  }
  console.log("Logged in? = true");
  return true;
};

export default checkAuth;
