import React from "react";
import { Link as RouterLink, Switch } from "react-router-dom";
import { useApolloClient } from "@apollo/client";
import { usePostsQuery } from "../../config/graphql";
import { Page } from "../../components/Page";
import { Box, Link, Paper } from "@material-ui/core";
import { ROUTES } from "./routes";
import { Route } from "../../components/Route";
import { PostComponent } from "./components/PostComponent";

const PostsModule = () => {
  return (
    <Page>
      <Switch>
        {ROUTES.map((route, i) => (
          <Route key={i} {...route} />
        ))}
      </Switch>
    </Page>
  );
};

export default PostsModule;
