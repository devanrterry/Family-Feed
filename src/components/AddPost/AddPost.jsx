import React, {Component} from 'react';
import './AddPost.css'
var file = new FormData();

class AddPost extends Component {
  state = {
    invalidForm: true,
    formData: {
    //   user: user,
      content: '',
      picture: ''
    }
  };

  formRef = React.createRef();

  handleFileUpload = e => {
      file.delete('image');
      file.append('user' , this.props.user.name)
      file.append('image', e.target.files[0])
  }

  handleSubmit = async e => {
    e.preventDefault();
    await file.append('content',JSON.stringify(this.state.formData))
    this.props.handleAddPost(file);
   
  };

  handleChange = e => {
    const formData = {...this.state.formData, [e.target.name]: e.target.value};
    this.setState({
      formData,
      invalidForm: !this.formRef.current.checkValidity()
    });
  };

  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <textarea
            //   className="form-control"
              id="textarea1"
              className="materialize-textarea"
              type="text"
              name="content"
              value={this.state.formData.content}
              onChange={this.handleChange}
              required
            />
          </div>
          <button
            class="btn btn-medium black"
            type="submit"
            disabled={this.state.invalidForm}
          >
            POST
          </button>
          <div className="image">
          <input type="file" name="image" onChange={this.handleFileUpload} />
          </div>
        </form>
      </div>
    );
  }
}


export default AddPost;

