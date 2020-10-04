import React from "react";
import { gql, useApolloClient } from "@apollo/client";
import Cookie from "js-cookie";
import { Link as RouterLink, useHistory } from "react-router-dom";
import { useMeQuery } from "../../config/graphql";
import Posts from "../Posts/pages/Posts";
import { checkAuth } from "../User/hooks/checkAuth";
import { Page } from "../../components/Page";
import Link from "@material-ui/core/Link";
import { Typography } from "@material-ui/core";

const Dashboard = () => {
  return (
    <Page>
      <Link component={RouterLink} to="/posts">
        <Typography variant="h5">Click to view blog posts</Typography>
      </Link>
    </Page>
  );
};

export default Dashboard;
