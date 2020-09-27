import React from "react";
import { useApolloClient } from "@apollo/client";
import Cookie from "js-cookie";
import { useHistory } from "react-router-dom";
import { useUserQuery } from "../../config/graphql";

const Dashboard = () => {
  const { data, error, loading } = useUserQuery();
  const client = useApolloClient();
  const history = useHistory();

  const logout = () => {
    client.resetStore();
    Cookie.remove("jwttoken");
    Cookie.remove("csrftoken");
    localStorage.clear();
    history.push("/");
  };
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error || !data) {
    return <div>Error...</div>;
  }
  return (
    <div>
      Hello, Beast.
      {console.log(data)}
      <p>{data?.user?.id}</p>
      <p>{data?.user?.firstname}</p>
      <p>{data?.user?.lastname}</p>
      <p>{data?.user?.email}</p>
      <br />
      <button onClick={logout}>Log out</button>
    </div>
  );
};

export default Dashboard;
