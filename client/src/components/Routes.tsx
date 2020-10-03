import React, { useEffect } from "react";
import { Route, useHistory } from "react-router-dom";
import { checkAuth } from "../modules/User/hooks/checkAuth";

interface IRoute {
  path: string;
  component: any;
  private: boolean;
  routes?: any;
}

export const Routes: React.FC<IRoute> = (route: IRoute) => {
  const isLoggedIn = checkAuth();
  const history = useHistory();

  const body = (
    <Route
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
