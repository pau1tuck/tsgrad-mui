import React, { useEffect } from "react";
import { Route, useHistory } from "react-router-dom";
import { ROUTES } from "../config/routes";
import { useUserQuery } from "../config/graphql";

interface IPrivateRoute {
  path: string;
  exact?: boolean;
  children: React.ReactNode;
}

const PrivateRoute: React.FC<IPrivateRoute> = ({ children, ...props }) => {
  const { data, loading } = useUserQuery();
  const history = useHistory();

  useEffect(() => {
    if (!data?.user) {
      history.push(ROUTES.home);
    }
  });

  return <Route {...props}>{children}</Route>;
};

export default PrivateRoute;
