import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAlert } from "react-alert";
import { Page } from "../../components/Page";

const Home = () => {
  const alert = useAlert();
  const welcome = useEffect(() => {
    alert.show("Welcome");
  });
  return <Page></Page>;
};

export default Home;
