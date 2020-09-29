import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAlert } from "react-alert";

const Home = () => {
  const alert = useAlert();
  const welcome = useEffect(() => {
    alert.show("Welcome");
  });
  return <div> </div>;
};

export default Home;
