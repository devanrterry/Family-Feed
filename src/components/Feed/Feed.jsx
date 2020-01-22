import React, { Component } from "react";
import Post from '../Post/Post';
import AddPost from '../AddPost/AddPost';


class Feed extends Component {

    render() {
        return (
        <div>
        <div>
        {this.props.posts.map(post => 
          <Post
            posts={post}
            handleDeletePost={this.props.handleDeletePost}
            handleUpdatePost={this.props.handleUpdatePost}
            key={post._id}
          />
        )}
      </div>
           <AddPost 
           handleAddPost={this.props.handleAddPost}/>
         </div> 
        );
      };
    }


export default Feed;