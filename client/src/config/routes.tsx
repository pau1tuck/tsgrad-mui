import { ROUTES as UserRoutes } from "../modules/User/routes";
import { ROUTES as PostsRoutes } from "../modules/Posts/routes";
import Home from "../modules/Home";
import Dashboard from "../modules/Dashboard";
import Posts from "../modules/Posts";
import Register from "../modules/User/pages/Register";
import Login from "../modules/User/pages/Login";
import ForgotPassword from "../modules/User/pages/ForgotPassword";
import Settings from "../modules/User/pages/Settings";

export const ROUTES = [
  {
    name: "User Dashboard",
    path: "/my",
    component: Dashboard,
    private: true,
  },
  {
    name: "Latest Posts",
    path: "/posts",
    component: Posts,
    private: true,
    routes: PostsRoutes,
  },
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
    path: "/settings",
    component: Settings,
    private: true,
  },
  {
    name: "Home",
    path: "/",
    component: Home,
    private: false,
    routes: UserRoutes,
  },
];
