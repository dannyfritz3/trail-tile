import React from 'react';
import "../../styles/Other.css"
import LoginButton from './LoginButton';
import LoginField from './LoginField';

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
            <div id="login-page-wrap">
                <div id="login-container">
                    <form id="login-form" onSubmit={this.formLoginHandler}>
                        <h1 id="login-header">Login</h1>
                        <LoginField changeHandler={this.inputPasswordChangeHandler} placeholder="Username" type="text" />
                        <LoginField changeHandler={this.inputPasswordChangeHandler} placeholder="Password" type="password" />
                        <LoginButton route="/submitLogin" value="Log In" />
                        <LoginButton route="/signup" value="Sign Up" />
                    </form>
                </div>
            </div>
        )
    }
}

export default Login;