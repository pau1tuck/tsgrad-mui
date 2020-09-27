import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAlert } from "react-alert";

const Home = () => {
  const alert = useAlert();
  const sponge = useEffect(() => {
    alert.show("Dog");
  });
  return (
    <div>
      Hello, Cocksucker.<br></br>
      <Link to="/register">Register</Link>
      <br></br>
      <Link to="/login">Log in</Link>
    </div>
  );
};

export default Home;
