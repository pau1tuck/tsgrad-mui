import React from "react";
import { useApolloClient } from "@apollo/client";
import Cookie from "js-cookie";
import { useUserQuery } from "../../../config/graphql";

const checkAuth = () => {
  const loggedIn = Boolean(Cookie.get("jwttoken"));
  const { data, error } = useUserQuery();

  if (error || !loggedIn || !data?.user) {
    return false;
  }
  return true;
};

export default checkAuth;
