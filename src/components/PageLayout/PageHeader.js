import React from 'react';
import NavTab from './NavTab.js';
import { Link } from 'react-router-dom';

class PageHeader extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            windowWidth: 0,
            windowHeight: 0
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            windowWidth: nextProps.windowWidth, 
            windowHeight: nextProps.windowHeight
        })
    }

    render(props) {
        return (
            <div id="header">
                <ul className="nav-tabs">
                    <Link id="logo" to="/">{this.state.windowWidth < 600 ? "MORC" : "TrailTile"}</Link>
                    <NavTab navTabTitle="Login" linkRef="/login"/>
                    <NavTab navTabTitle="About" linkRef="/about"/>
                </ul>
            </div>
        )
    };
}

export default PageHeader;