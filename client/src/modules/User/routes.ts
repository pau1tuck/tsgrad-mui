import React from "react";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import Profile from "./pages/Profile";
import Home from "../Home";

export const ROUTES = [
  {
    path: "/register",
    component: Register,
    private: false,
  },
  {
    path: "/login",
    component: Login,
    private: false,
  },
  {
    path: "/forgot",
    component: ForgotPassword,
    private: false,
  },
  {
    path: "/profile",
    component: Profile,
    private: true,
  },
];