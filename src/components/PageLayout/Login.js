import React from 'react';
import "../../styles/Other.css"

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
        this.inputUsernameChangeHandler = this.inputUsernameChangeHandler.bind(this);
        this.inputPasswordChangeHandler = this.inputPasswordChangeHandler.bind(this);
        this.formLoginHandler = this.formLoginHandler.bind(this);
    }

    inputUsernameChangeHandler(event) {
        this.setState({username: event.target.value})
    }

    inputPasswordChangeHandler(event) {
        this.setState({password: event.target.value})
    }
    
    formLoginHandler(event) {
        event.preventDefault();
        alert("You are submitting: " + this.state.username);
    }
    
    formSignupHandler(event) {
        event.preventDefault();
        alert("You are submitting: " + this.state.username);
    }

    render(props) {
        return (
            <div id="login-page-container">
                <div id="signup-container">
                    <form onSubmit={this.formSignupHandler}>
                        <h1 id="signup-header">Signup</h1>
                        <LoginField changeHandler={this.inputPasswordChangeHandler} placeholder="Email" type="text" />
                        <LoginField changeHandler={this.inputPasswordChangeHandler} placeholder="Confirm Email" type="text" />
                        <LoginField changeHandler={this.inputPasswordChangeHandler} placeholder="Username" type="text" />
                        <LoginField changeHandler={this.inputPasswordChangeHandler} placeholder="Password" type="password" />
                        <LoginField changeHandler={this.inputPasswordChangeHandler} placeholder="Confirm Password" type="password" />
                        <input id="login-button" type="submit" value="Sign Up" />
                    </form>
                </div>
                <div id="login-container">
                    <form onSubmit={this.formLoginHandler}>
                        <h1 id="login-header">Login</h1>
                        <LoginField changeHandler={this.inputPasswordChangeHandler} placeholder="Username" type="text" />
                        <LoginField changeHandler={this.inputPasswordChangeHandler} placeholder="Password" type="password" />
                        <input id="login-button" type="submit" value="Log In" />
                    </form>
                </div>
            </div>
        )
    }
}

class LoginField extends React.Component {
    render(props) {
        return(
            <div className="login-input-box">
                <label className="login-input-label">{this.props.placeholder}:</label>
                <input className="login-input-field" onChange={this.props.changeHandler} placeholder={this.props.placeholder} type={this.props.type}></input>
            </div>
        )
    }
}

export default Login;