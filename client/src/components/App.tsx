import React, { Suspense, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { GlobalStyle } from "../styles/global";
import { ROUTES } from "../config/routes.config";
import PrivateRoute from "./PrivateRoute";
import FullPageLoader from "./FullPageLoader";

const Home = React.lazy(() => import("../modules/Home"));
const Dashboard = React.lazy(() => import("../modules/Dashboard"));

const App: React.FC = () => {
  return (
    <Suspense fallback={<FullPageLoader />}>
      <Switch>
        <Route exact path={ROUTES.home}>
          <Home />
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

// {auth ? <Redirect to="/dashboard" /> : <Home />}
