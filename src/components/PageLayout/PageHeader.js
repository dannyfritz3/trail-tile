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
            <div id="header" /*style={this.state.style}*/ >
                <ul className="nav-tabs">
                    {/* <img src="public/smaller_MN.png" alt="icon" /> */}
                    <Link id="logo" to="/">{this.state.windowWidth < 600 ? "MORC" : "Minnesota Off-Road Cyclists"}</Link>
                    <NavTab navTabTitle="Login" linkRef="/login"/>
                    <NavTab navTabTitle="About" linkRef="/about"/>
                </ul>
            </div>
        )
    };
}

export default PageHeader;