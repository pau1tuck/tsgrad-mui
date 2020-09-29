import React, { useEffect } from "react";
import { useApolloClient } from "@apollo/client";
import Cookie from "js-cookie";
import { useHistory, Redirect } from "react-router-dom";
import { ROUTES } from "../../../config/routes";
import { LOCAL_STORAGE } from "../../../config/constants/variables";

const useAuthToken = () => {
  const client = useApolloClient();
  const history = useHistory();

  const setAuthCookie = (jwtToken: any, refreshToken: any) => {
    localStorage.setItem(LOCAL_STORAGE.token, jwtToken);
    Cookie.set("jwttoken", jwtToken);
    Cookie.set("refreshtoken", refreshToken);
    // Cookie.set("jwttoken", token { secure: true });
    history.push("/dashboard");
  };

  const logout = () => {
    client.resetStore();
    localStorage.clear();
    <Redirect to="/home" />;
  };

  return { setAuthCookie, logout };
};

export default useAuthToken;
