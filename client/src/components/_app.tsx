import React, { Suspense } from "react";
import { Loading } from "./Loading";
import { Container } from "./Container";
import { Switch } from "react-router-dom";
import { ROUTES } from "../config/routes";
import { Route } from "./Route";

const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Container>
        <Switch>
          {ROUTES.map((route, i) => (
            <Route key={i} {...route} />
          ))}
        </Switch>
      </Container>
    </Suspense>
  );
};

export default App;
