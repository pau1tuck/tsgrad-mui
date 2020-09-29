import React from "react";
import { useApolloClient } from "@apollo/client";
import Cookie from "js-cookie";
import { useHistory } from "react-router-dom";
import { useUserQuery } from "../../config/graphql";
import Posts from "../Posts";
import checkAuth from "../User/hooks/checkAuth";

const Dashboard = () => {
  return (
    <div>
      <Posts />
    </div>
  );
};

export default Dashboard;
