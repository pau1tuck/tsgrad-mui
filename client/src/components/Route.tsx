import React, { useEffect } from "react";
import { Route as Router, useHistory } from "react-router-dom";
import { checkAuth } from "../modules/User/hooks/checkAuth";

interface IRoute {
  path: string;
  component: any;
  private: boolean;
  routes?: any;
}

export const Route: React.FC<IRoute> = (route: IRoute) => {
  const isLoggedIn = checkAuth();
  const history = useHistory();

  const body = (
    <Router
      path={route.path}
      render={(props) => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );

  if (!route.private) {
    return body;
  }
  useEffect(() => {
    if (!isLoggedIn) {
      console.log("Nice try, bastard.");
      history.push("/");
    }
  });
  return body;
};
