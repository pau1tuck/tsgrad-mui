import { ROUTES as UserRoutes } from "../modules/User/routes";
import { ROUTES as PostsRoutes } from "../modules/Posts/routes";
import Home from "../modules/Home";
import Dashboard from "../modules/Dashboard";
import Posts from "../modules/Posts";

export const ROUTES = [
  {
    name: "User Dashboard",
    path: "/dashboard",
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
    name: "Authentication",
    path: "/",
    component: Home,
    private: false,
    routes: UserRoutes,
  },
];
