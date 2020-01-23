import React from "react";
import Post from "../Post/Post";
import AddPost from "../AddPost/AddPost";

function Feed(props) {
  return (
    <div>
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
    bottom: 30,
    right: 30,
    width: 250,
    height: 350,
    padding: 10,
    border: '1px solid #000',
    borderRadius: 5,
    backgroundColor: 'light grey',
    color: 'black',
}

export default Feed;
