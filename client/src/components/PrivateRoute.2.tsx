import React, { useEffect } from "react";
import Cookie from "js-cookie";
import { Route, useHistory } from "react-router-dom";
import { ROUTES } from "../config/routes";
import { useMeQuery } from "../config/graphql";
import { checkAuth } from "../modules/User/hooks/checkAuth";

interface IPrivateRoute {
  path: string;
  exact?: boolean;
  children: React.ReactNode;
}

export const PrivateRoute: React.FC<IPrivateRoute> = ({
  children,
  ...props
}) => {
  const isLoggedIn = checkAuth();
  const history = useHistory();
  /*
  if (!localStorage.getItem(LOCAL_STORAGE_TEMPLATE.token)) {
    history.push(ROUTES.home);
  } */
  useEffect(() => {
    if (!isLoggedIn) {
      console.log("Nice try, bastard.");
      history.push("/");
    }
  });

  return <Route {...props}>{children}</Route>;
};

export default PrivateRoute;
