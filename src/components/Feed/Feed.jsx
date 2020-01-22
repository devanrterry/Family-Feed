import React, { Component } from "react";
import Post from '../Post/Post';
import AddPost from '../AddPost/AddPost';


class Feed extends Component {

    state = {
      posts: []
    };

    render() {
        return (
          <div>
           <Post />
           <AddPost />
          </div>
        );
      }
    }


export default Feed;