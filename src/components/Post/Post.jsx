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
        <p> { post.user}</p>
        </div>
        <div>
        <Link
          className='btn-small green'
          to={{
            pathname: '/edit',
            state: {post}
          }}
        >
          Edit 
        </Link>
    
        
        <button
          onClick={() => handleDeletePost(post._id)}
          class="btn-small red"
        >
          DELETE
        </button>
        <div class="divider"></div>
      </div>
    </div>
  );
}


export default Post;