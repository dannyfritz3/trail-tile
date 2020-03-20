import React from 'react';
import NavTab from './NavTab.js';
import { Link } from 'react-router-dom';

class PageHeader extends React.Component{
    render(props) {
        return (
            <div id="header">
                <ul className="nav-tabs">
                    <Link id="logo" to="/">Minnesota Off-Road Cyclists</Link>
                    <NavTab navTabTitle="Login" linkRef="/login"/>
                    <NavTab navTabTitle="About" linkRef="/about"/>
                </ul>
            </div>
        )
    };
}

export default PageHeader;