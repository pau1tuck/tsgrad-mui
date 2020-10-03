import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import { GlobalStyle } from "../styles/global";
import { ROUTES } from "../config/routes";
import PrivateRoute from "./PrivateRoute";
import { Loading } from "./Loading";
import { Routes } from "./Routes";

const App: React.FC = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        {ROUTES.map((route, i) => (
          <Routes key={i} {...route} />
        ))}
      </Switch>
      <GlobalStyle />
    </Suspense>
  );
};

export default App;
