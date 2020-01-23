import React from 'react';
import { Link} from 'react-router-dom';
// import EditPostPage from '../../pages/EditPostPage/EditPostPage';


// class Post extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state ={
//             posts : this.props.posts
//         }
//     }

// render(){
function Post({post, handleDeletePost}){
  return (
    <div >
        <div>
        <p> {post.content}</p>
        </div>
        <div>
        <Link
          className='btn btn-xs btn-warning'
          to={{
            pathname: '/edit',
            state: {post}
          }}
        >
          EDIT
        </Link>
        
        <button
          className='btn btn-xs btn-danger margin-left-10'
          onClick={() => handleDeletePost(post._id)}
        >
          DELETE
        </button>
      </div>
    </div>
  );
}


export default Post;