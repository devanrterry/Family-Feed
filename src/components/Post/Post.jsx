import React from 'react';
import {Link} from 'react-router-dom';

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            posts : this.props.posts
        }
    }

    render(){
  return (
    <div >
        <div>
        <p>{this.state.posts.content}</p>
        </div>
        <div>
        <Link
          className='btn btn-xs btn-warning'
          to={{
            pathname: '/edit',
            // state: {posts}
          }}
        >
          EDIT
        </Link>
        <button
          className='btn btn-xs btn-danger margin-left-10'
          onClick={() => this.props.handleDeletePost(this.state.posts._id)}
        >
          DELETE
        </button>
      </div>
    </div>
  );
}
}

export default Post;