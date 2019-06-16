import React, { Fragment } from "react";
import { useStore } from "easy-peasy";
import PostItem from "./PostItem";

const Posts = () => {
  const posts = useStore(state => state.postsModel.posts);

  return (
    <Fragment>
      <h1 style={{ marginTop: "3.5rem" }}>Posts</h1>
      <p>I came from postsModel ala easy-peasy!</p>
      <hr />
      {posts.map(post => (
        <PostItem post={post} key={post.id} />
      ))}
    </Fragment>
  );
};

export default Posts;
