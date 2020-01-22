import React from 'react';

function AddPost({post}) { 
  return (
    <div >
      <form >
            <div className="col-sm-12">
              <input type="text"  placeholder="Write Post" name="content" />
            </div>
          <div className="form-group">
              <button className="btn btn-default">Post</button>&nbsp;&nbsp;
          </div>
        </form>
    </div>
  );
}

export default AddPost;