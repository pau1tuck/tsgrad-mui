import React from "react";
import {
  Link as RouterLink,
  Switch,
  useLocation,
  useParams,
} from "react-router-dom";
import { useApolloClient } from "@apollo/client";
import { usePostsQuery } from "../../../config/graphql";
import { Page } from "../../../components/Page";
import { Box, Link, Paper } from "@material-ui/core";

export const PostComponent: React.FC = () => {
  let location = useParams();
  const { data, error, loading } = usePostsQuery();

  const posts = data?.posts?.map((post: any) => (
    <div key={post?.id}>
      <Link component={RouterLink} to={"/posts/" + post?.id}>
        <h2>{post?.title}</h2>
      </Link>
      <p>
        {post?.author.firstName} {post.author.lastName}
      </p>
      <p>{new Date(post?.createdAt).toLocaleDateString("en-GB")}</p>
      <p>{post?.content}</p>
    </div>
  ));

  console.log(location);
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error || !data) {
    console.log(error?.message);
    return <div>Error...</div>;
  }
  return <Box p={2}>{posts}</Box>;
};
