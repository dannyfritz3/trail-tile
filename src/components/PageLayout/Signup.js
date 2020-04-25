import React from 'react';
import LoginButton from './LoginButton';
import LoginField from './LoginField';

class Signup extends React.Component {
    render(props) {
        return (
            <div id="signup-page-wrap">
                <div id="signup-container">
                    <form id="signup-form" onSubmit={this.formSignupHandler}>
                        <h1 id="signup-header">Signup</h1>
                        <LoginField changeHandler={this.inputPasswordChangeHandler} placeholder="Email" type="text" />
                        <LoginField changeHandler={this.inputPasswordChangeHandler} placeholder="Confirm Email" type="text" />
                        <LoginField changeHandler={this.inputPasswordChangeHandler} placeholder="Username" type="text" />
                        <LoginField changeHandler={this.inputPasswordChangeHandler} placeholder="Password" type="password" />
                        <LoginField changeHandler={this.inputPasswordChangeHandler} placeholder="Confirm Password" type="password" />
                        <LoginButton route="/submitSignup" value="Sign Up" />
                    </form>
                </div>
            </div>
        )
    }
}

export default Signup;