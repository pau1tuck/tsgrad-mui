import React, { Suspense } from "react";
import { Switch } from "react-router-dom";
import { GlobalStyle } from "../styles/global";
import { ROUTES } from "../config/routes";
import { Loading } from "./Loading";
import { Route } from "./Route";

const App: React.FC = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        {ROUTES.map((route, i) => (
          <Route key={i} {...route} />
        ))}
      </Switch>
      <GlobalStyle />
    </Suspense>
  );
};

export default App;
