import React from 'react';
import Feed from '../Feed/Feed';
// import NavBar from '../NavBar/NavBar'
// import {Link} from 'react-router-dom'
// import styles from './GameBoard.module.css';

const MainPage = (props) => (

  <div style={{display: props.user ? 'block' : 'none'}}>
     
      <Feed 
      user={props.user}
      posts={props.posts}
      handleAddPost={props.handleAddPost}
      handleDeletePost={props.handleDeletePost}
      handleUpdatePost={props.handleUpdatePost}
      />
    
  </div>
);

export default MainPage;