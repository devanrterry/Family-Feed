import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SignupForm from '../../components/SignupForm/SignupForm';
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
      <div className='SignupPage'>
        <SignupForm {...this.props} updateMessage={this.updateMessage} />
        <h1>Signup Page</h1>
        <p>{this.state.message}</p>
        <div>
            <Link to="/">Cancel Signup</Link>
        </div>
      </div>
    );
  }
}

export default SignupPage;