import React, { Component } from "react";
import Post from '../Post/Post';
import AddPost from '../AddPost/AddPost';


// const Feed = (props) => (
class Feed extends Component {


    render() {
        return (
        <div>
        <div>
        {this.props.posts.map(post => 
          <Post
            post={post}
            // handleDeletePost={props.handleDeletePost}
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