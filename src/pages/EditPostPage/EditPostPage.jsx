import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar'

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
        <NavBar
                  user={this.state.user}
                  handleLogout={this.handleLogout}
                />
        <h4>Edit Post</h4>
        <div class="container">
        <form class="container" ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
          <div className="form-group" >
            <input
              type="text"
              name="content"
              value={this.state.formData.content}
              onChange={this.handleChange}
              required
            />
          </div>
          <div class="row">
          <div class="left-align col s6">
          <button
            type="submit"
            className="btn btn-small"
            disabled={this.state.invalidForm}
          >
            <i class="material-icons">check</i>
          </button>
          </div>
          <div class="right-align col s6">
          <Link to='/' class="btn btn-small red"> <i class="material-icons">cancel</i></Link>
          </div>
          </div>
          </form>
          </div>
          </>
      
    );
  }
}

export default EditPostPage;