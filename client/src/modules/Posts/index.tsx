import React from "react";
import { Link as RouterLink, Switch } from "react-router-dom";
import { useApolloClient } from "@apollo/client";
import { usePostsQuery } from "../../config/graphql";
import { Box, Link, Paper } from "@material-ui/core";
import { ROUTES } from "./routes";
import { Route } from "../../components/Route";
import { PostComponent } from "./components/PostComponent";

const PostsModule = () => {
  return (
    <Switch>
      {ROUTES.map((route, i) => (
        <Route key={i} {...route} />
      ))}
    </Switch>
  );
};

export default PostsModule;
