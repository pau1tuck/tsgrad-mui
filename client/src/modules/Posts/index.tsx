import React from "react";
import { useApolloClient } from "@apollo/client";
import { usePostsQuery } from "../../config/graphql";

const Posts = () => {
  const { data, error, loading } = usePostsQuery();

  const posts = data?.posts?.map((post: any) => (
    <div key={post?.id}>
      <h2>{post?.title}</h2>
      <p>
        {post?.author.firstname} {post.author.lastname}
      </p>
      <p>{post?.createdAt}</p>
      <p>{post?.content}</p>
    </div>
  ));

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error || !data) {
    console.log(error?.message);
    return <div>Error...</div>;
  }

  return (
    <div>
      <br />
      <div>{posts}</div>
    </div>
  );
};

export default Posts;
