import React, { useEffect } from "react";
import { useAlert } from "react-alert";
import Login from "../User/pages/Login";

const Home = () => {
  const alert = useAlert();
  const welcome = useEffect(() => {
    alert.show("Welcome");
  });
  return <Login />;
};

export default Home;
