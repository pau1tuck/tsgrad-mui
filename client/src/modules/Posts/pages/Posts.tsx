import React from "react";
import { useApolloClient } from "@apollo/client";
import { usePostsQuery } from "../../../config/graphql";
import { Box, Paper } from "@material-ui/core";
import { PostComponent } from "../components/PostComponent";

const Posts = () => {
  const { data, error, loading } = usePostsQuery();

  const body = data?.posts?.map((post: any) => (
    <PostComponent key={post.id} post={post} />
  ));

  if (loading) {
    return null;
  }
  if (error || !data?.posts) {
    console.log(error?.message);
    return <div>Not found...</div>;
  }
  return (
    <Paper elevation={6}>
      <br />
      <Box p={2}>{body}</Box>
    </Paper>
  );
};

export default Posts;
