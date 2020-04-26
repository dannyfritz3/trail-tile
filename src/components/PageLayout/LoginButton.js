import React from 'react';
import { Link } from 'react-router-dom';

class LoginButton extends React.Component {
    render(props) {
        return (
            <Link to={this.props.route}><input className="login-button"  type="submit" value={this.props.value} /></Link>
        )
    }
}

export default LoginButton;