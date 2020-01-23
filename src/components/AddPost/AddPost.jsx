import React, {Component} from 'react';

class AddPost extends Component {
  state = {
    invalidForm: true,
    formData: {
    //   user: user,
      content: '',
    }
  };

  formRef = React.createRef();

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleAddPost(this.state.formData);
   
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
            class="btn btn-medium"
            type="submit"
            disabled={this.state.invalidForm}
          >
            POST
          </button>
        </form>
      </div>
    );
  }
}


export default AddPost;

