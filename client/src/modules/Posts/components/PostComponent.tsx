import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "@material-ui/core";

export const PostComponent = ({ post }: any) => {
  return (
    <div key={post.id}>
      <Link component={RouterLink} to={"/posts/" + post.id}>
        <h2>{post.title}</h2>
      </Link>
      <p>
        {post.author.firstName} {post.author.lastName}
      </p>
      <p>{new Date(post.createdAt).toLocaleDateString("en-GB")}</p>
      <p>{post.content}</p>
      <p>
        {post.author.id} {post.author.email}
      </p>
    </div>
  );
};
