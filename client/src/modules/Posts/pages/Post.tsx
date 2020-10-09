import React from "react";
import { useParams } from "react-router-dom";
import { useApolloClient } from "@apollo/client";
import { usePostQuery } from "../../../config/graphql";
import { Box, Link, Paper } from "@material-ui/core";
import { PostComponent } from "../components/PostComponent";

const Post = () => {
  let { id } = useParams();
  const { data: post, error, loading } = usePostQuery({
    variables: { id },
  });

  if (loading) {
    return null;
  }
  if (error || !post?.post) {
    console.log(error?.message);
    return <div>Error...</div>;
  }
  return (
    <Paper elevation={6}>
      <br />
      <Box p={2}>
        <PostComponent post={post.post} />
      </Box>
    </Paper>
  );
};

export default Post;
