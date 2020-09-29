import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import { GlobalStyle } from "../styles/global";
import { ROUTES } from "../config/routes";
import PrivateRoute from "./PrivateRoute";
import { Page } from "./Page";
import { Header } from "./Header";

const Home = React.lazy(() => import("../modules/Home"));
const Register = React.lazy(() => import("../modules/User/pages/Register"));
const Login = React.lazy(() => import("../modules/User/pages/Login"));
const Dashboard = React.lazy(() => import("../modules/Dashboard"));

const App: React.FC = () => {
  return (
    <Suspense fallback="Loading...">
      <Switch>
        <Route exact path={ROUTES.home}>
          <Home />
        </Route>
        <Route exact path={ROUTES.register}>
          <Register />
        </Route>
        <Route exact path={ROUTES.login}>
          <Login />
        </Route>
        <PrivateRoute exact path={ROUTES.dashboard}>
          <Dashboard />
        </PrivateRoute>
      </Switch>
      <GlobalStyle />
    </Suspense>
  );
};

export default App;
