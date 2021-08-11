import React from 'react'
import './login.css'
import { Link } from "react-router-dom";

function Login() {
    return (
        <div className="login">
            <Link to="/">
            <img 
            className="login_logo" 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"/>
            </Link>

            <div className="login_container">
                <h1>Sign In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="text" />
                    <h5>Password</h5>
                    <input type="password" />
                    <button className="login_signInButton">Sign In</button>
                </form>
                <p>This is not the real Amazon.  It is a clone created for educational purposes.
                    Don't enter in your login credentials.  It's not secure.  Don't do it.
                </p>
                <button className="login_registerButton">Create New Amazon account</button>
            </div>
        </div>
    )
}

export default Login
