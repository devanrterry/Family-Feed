import React from 'react';
import Feed from '../Feed/Feed';


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