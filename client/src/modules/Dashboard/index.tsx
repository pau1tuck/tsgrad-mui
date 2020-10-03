import React from "react";
import { gql, useApolloClient } from "@apollo/client";
import Cookie from "js-cookie";
import { Link as RouterLink, useHistory } from "react-router-dom";
import { useMeQuery } from "../../config/graphql";
import Posts from "../Posts";
import { checkAuth } from "../User/hooks/checkAuth";
import { Page } from "../../components/Page";
import Link from "@material-ui/core/Link";

const Dashboard = () => {
  return (
    <Page>
      <Link component={RouterLink} to="/posts">
        Posts
      </Link>
    </Page>
  );
};

export default Dashboard;
