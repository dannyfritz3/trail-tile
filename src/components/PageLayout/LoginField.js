import React from 'react';

class LoginField extends React.Component {
    render(props) {
        return(
            <div className="login-input-box">
                <label className="login-input-label" for={this.props.placeholder}>{this.props.placeholder}:</label>
                <input id={this.props.placeholder} className="login-input-field" onChange={this.props.changeHandler} placeholder={this.props.placeholder} type={this.props.type}></input>
            </div>
        )
    }
}

export default LoginField;