import React from 'react';
import { Link} from 'react-router-dom';
import './Post.css';

// import EditPostPage from '../../pages/EditPostPage/EditPostPage';


// class Post extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state ={
//             posts : this.props.posts
//         }
//     }

// render(){

function Post({post, handleDeletePost, user}){
  return (
      
    <div class="row">
    <div class="col s12 m6">
      <div class="card blue-grey lighten-2">
        <div class="card-content black-text">
          <span class="card-title">{ post.user} wrote on {`${new Date(post.date).toLocaleString()}`}</span>
          <img src={post.picture}/>
          <p> {post.content}</p>
        </div>
        <div class="card-action">
        
        { (user.name === post.user) && 
        <div>
        <Link
          className='btn-small '
          to={{
            pathname: '/edit',
            state: {post}
          }}
        >
          Edit 
        </Link>
          &nbsp;&nbsp;&nbsp;
        <button
          onClick={() => handleDeletePost(post._id)}
          class="btn-small red"
        >
          DELETE
        </button>
        </div>
}
        </div>
      </div>
        </div>
      </div>
       ) }
    
       
    
      export default Post;

