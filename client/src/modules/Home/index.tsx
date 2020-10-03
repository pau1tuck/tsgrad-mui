import React, { useEffect } from "react";
import { useAlert } from "react-alert";
import { Link, Switch } from "react-router-dom";
import { Routes } from "../../components/Routes";
import { ROUTES as UserRoutes } from "../User/routes";

const Home = ({}) => {
  return (
    <div>
      Dog
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
      <Switch>
        {UserRoutes.map((route: any, i: number) => (
          <Routes key={i} {...route} />
        ))}
      </Switch>
    </div>
  );
};

export default Home;
