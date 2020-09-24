import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { getAuthToken } from "../../config/authToken";
import { useUserQuery } from "../../config/graphql";
import { ROUTES } from "../../config/routes.config";
import { Login } from "../User/pages/Login";

const Home = () => {
  return (
    <div>
      Hello, Cocksucker.
      <Login />
    </div>
  );
};

export default Home;
