import React, { useEffect } from "react";
import Cookie from "js-cookie";
import { Route, useHistory } from "react-router-dom";
import { ROUTES } from "../config/routes";
import { useUserQuery } from "../config/graphql";
import { LOCAL_STORAGE_TEMPLATE } from "../config/authToken";

interface IPrivateRoute {
  path: string;
  exact?: boolean;
  children: React.ReactNode;
}

export const PrivateRoute: React.FC<IPrivateRoute> = ({
  children,
  ...props
}) => {
  const history = useHistory();
  /*
  if (!localStorage.getItem(LOCAL_STORAGE_TEMPLATE.token)) {
    history.push(ROUTES.home);
  } */
  useEffect(() => {
    if (!Cookie.get("jwttoken")) {
      console.log("Nice try, bastard.");
      history.push(ROUTES.home);
    }
  });

  return <Route {...props}>{children}</Route>;
};

export default PrivateRoute;
