import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import SignupForm from '../../components/SignupForm/SignupForm';
import NavBar from '../../components/NavBar/NavBar';
import './SignupPage.css';

class SignupPage extends Component {
  constructor(props) {
    super(props);
    this.state = {message: ''}
  }

  updateMessage = (msg) => {
    this.setState({message: msg});
  }

  render() {
    return (
      <>
      <NavBar
      user={this.state.user}
      handleLogout={this.handleLogout}
    />
      <div className='container'>
        <div class="container">
        <SignupForm {...this.props} updateMessage={this.updateMessage} />
        <p>{this.state.message}</p>
        </div>
      </div>
      </>
    );
  }
}

export default SignupPage;