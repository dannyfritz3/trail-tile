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
    }

    render(props) {
        const inputUsernameChangeHandler = (event) => {
            this.setState({username: event.target.value})
        };
    
        const inputPasswordChangeHandler = (event) => {
            this.setState({password: event.target.value})
        };
        
        const formLoginHandler = (event) => {
            event.preventDefault();
            alert("You are submitting: " + this.state.username);
        };
    
        return (
            <div id="login-page-wrap">
                <div id="login-container">
                    <form id="login-form" onSubmit={formLoginHandler}>
                        <h1 id="login-header">Login</h1>
                        <LoginField changeHandler={inputUsernameChangeHandler} placeholder="Username" type="text" />
                        <LoginField changeHandler={inputPasswordChangeHandler} placeholder="Password" type="password" />
                        <LoginButton route="/submitLogin" value="Log In" />
                        <LoginButton route="/signup" value="Sign Up" />
                    </form>
                </div>
            </div>
        )
    }
}

export default Login;