import PostsModule from "./index";
import Post from "./pages/Post";
import Posts from "./pages/Posts";

export const ROUTES = [
  {
    path: "/posts/dog",
    component: Post,
    private: false,
  },
  {
    path: "/posts/:id",
    component: Post,
    private: true,
  },
  {
    path: "/posts",
    component: Posts,
    private: false,
  },
];
