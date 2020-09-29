import React from "react";
import { useApolloClient } from "@apollo/client";
import Cookie from "js-cookie";
import { useHistory, Redirect } from "react-router-dom";
import { ROUTES } from "../../../config/routes";
import { LOCAL_STORAGE } from "../../../config/constants/variables";

const useAuthToken = () => {
  const client = useApolloClient();
  const history = useHistory();

  const setAuthCookie = (token: string) => {
    localStorage.setItem(LOCAL_STORAGE.token, token);
    Cookie.set("jwttoken", token);
    // Cookie.set("jwttoken", token { secure: true });
    history.push(ROUTES.dashboard);
  };

  const logout = () => {
    client.resetStore();
    localStorage.clear();
    <Redirect to="/home" />;
  };

  return { setAuthCookie, logout };
};

export default useAuthToken;
