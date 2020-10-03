import React from "react";
import { useParams } from "react-router-dom";
import { useApolloClient } from "@apollo/client";
import { usePostsQuery } from "../../../config/graphql";
import { Page } from "../../../components/Page";
import { Box, Link, Paper } from "@material-ui/core";
import { PostComponent } from "../components/PostComponent";
import { Postie } from "../components/Postie";

const Posts = () => {
  const { data, error, loading } = usePostsQuery();

  const body = data?.posts?.map((post: any) => (
    <Postie key={post.id} post={post} />
  ));

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error || !data?.posts) {
    console.log(error?.message);
    return <div>Not found...</div>;
  }
  return (
    <>
      <br />
      <Paper elevation={6}>
        <br />
        <Box p={2}>{body}</Box>
      </Paper>
    </>
  );
};

export default Posts;
