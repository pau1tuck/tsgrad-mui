import React from "react";
import { gql, useApolloClient } from "@apollo/client";
import Cookie from "js-cookie";
import { useHistory } from "react-router-dom";
import { useMeQuery } from "../../config/graphql";
import Posts from "../Posts";
import checkAuth from "../User/hooks/checkAuth";
import { Page } from "../../components/Page";

const Dashboard = () => {
  const client = useApolloClient();
  const query = gql`
    query me {
      me {
        id
        firstName
        lastName
        email
      }
    }
  `;
  const data = client.readQuery({ query });
  console.log("User data: " + data);
  return (
    <Page>
      <Posts />
    </Page>
  );
};

export default Dashboard;
