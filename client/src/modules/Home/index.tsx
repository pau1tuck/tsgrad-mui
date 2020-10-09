import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { checkAuth } from "../User/hooks/checkAuth";

const Home = () => {
  const loggedIn = checkAuth();
  const history = useHistory();

  useEffect(() => {
    if (loggedIn) {
      console.log("Logged in:" + loggedIn);
      history.push("/my");
    }
  }, []);
  return <div>What the fuck?</div>;
};

export default Home;
