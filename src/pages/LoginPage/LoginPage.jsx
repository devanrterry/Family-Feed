import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css';

class LoginPage extends Component {
    render() {
        return (
            <div>
                <Link to="/">Cancel Login</Link>
            </div>
        )
    }
}

export default LoginPage;