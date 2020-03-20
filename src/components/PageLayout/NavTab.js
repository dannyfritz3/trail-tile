import React from 'react';
import { Link } from 'react-router-dom';

class NavTab extends React.Component{
    render(props) {
        return (
        <li className="nav-tab active-left" style={{float:'right'}}>
            <Link className="nav-tab-link" to={this.props.linkRef}>
                {this.props.navTabTitle}
            </Link>
        </li>
        )
    };
}

export default NavTab;