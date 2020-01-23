import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class EditPostPage extends Component {
  state = {
    invalidForm: false,
    formData: this.props.location.state.post
  };

  formRef = React.createRef();

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleUpdatePost(this.state.formData);
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
      <>
        <h1>Edit Post</h1>
        <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
          <div className="form-group" >
            <input
              type="text"
              name="content"
              value={this.state.formData.content}
              onChange={this.handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="btn"
            disabled={this.state.invalidForm}
          >
            Save Changes
          </button>
          <button
          className="btn red"
          >
          <Link to='/'>CANCEL</Link>
          </button>
          </form>
      </>
    );
  }
}

export default EditPostPage;