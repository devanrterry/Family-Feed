import React from "react";
import Post from "../Post/Post";
import AddPost from "../AddPost/AddPost";

function Feed(props) {
  return (
    <div>
        <h1>What's everyone up to..</h1>
      <div>
        { props.user && props.posts.map(post => (
          <Post
            post={post}
            handleDeletePost={props.handleDeletePost}
            handleUpdatePost={props.handleUpdatePost}
            key={post._id}
            user={props.user}
          />
        ))}
      </div>
      <div style={{...entryDiv}}>
      <AddPost handleAddPost={props.handleAddPost} 
      user={props.user}
      />
      </div>
    </div>
  );
}

let entryDiv = {
    position: 'fixed',
    bottom: 200,
    right: 200,
    width: 400,
    height: 350,
    padding: 10,
    border: '1px solid #000',
    borderRadius: 20,
    background: 'rgba(69, 94, 92, 0.884)',
    color: 'white',
}

export default Feed;
