import React from "react";
import Post from "../Post/Post";
import AddPost from "../AddPost/AddPost";

function Feed(props) {
  return (
    <div>
      <div>
        {props.posts.map(post => (
          <Post
            post={post}
            handleDeletePost={props.handleDeletePost}
            handleUpdatePost={props.handleUpdatePost}
            key={post._id}
          />
        ))}
      </div>
      <div style={{...entryDiv}}>
      <AddPost handleAddPost={props.handleAddPost} />
      </div>
    </div>
  );
}

let entryDiv = {
    position: 'fixed',
    top: 30,
    right: 30,
    width: 250,
    height: 150,
    padding: 10,
    border: '1px solid #000',
    borderRadius: 5,
    backgroundColor: '#555',
    color: 'white',
}

export default Feed;
