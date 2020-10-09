import React from "react";
import { gql, useApolloClient } from "@apollo/client";
import Cookie from "js-cookie";
import { Link as RouterLink, useHistory } from "react-router-dom";
import { useMeQuery } from "../../config/graphql";
import Posts from "../Posts/pages/Posts";
import { checkAuth } from "../User/hooks/checkAuth";
import Link from "@material-ui/core/Link";
import { Typography } from "@material-ui/core";

const Dashboard = () => {
  return (
    <>
      <Link component={RouterLink} to="/posts">
        <Typography variant="h5">Click to view blog posts</Typography>
      </Link>
    </>
  );
};

export default Dashboard;
