import React from 'react';
import { Route } from 'react-router-dom';
import './styles/App.css';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import PageHeader from './components/PageLayout/PageHeader';
import ContentWrap from './components/PageLayout/ContentWrap';
import About from './components/PageLayout/About';
import Login from './components/PageLayout/Login';
import Signup from './components/PageLayout/Signup';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            windowWidth: 0,
            windowHeight: 0
        };
        this.updateDimensions = this.updateDimensions.bind(this);
    }

    componentDidMount() {
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions);
    }
    
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
    }

    updateDimensions() {
        let windowWidth = typeof window !== "undefined" ? window.innerWidth : 0;
        let windowHeight = typeof window !== "undefined" ? window.innerHeight : 0;

        this.setState({
            windowWidth: windowWidth,
            windowHeight: windowHeight
        });
    }

    render() {
        let showMap = this.state.windowWidth > 1024;
        
        return(
            <div id="page-container">
                <PageHeader windowWidth={this.state.windowWidth} windowHeight={this.state.windowHeight} />
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/signup">
                    <Signup />
                </Route>
                <Route exact path="/">
                    <ContentWrap windowWidth={this.state.windowWidth} windowHeight={this.state.windowHeight} showMap={showMap} />
                </Route>
            </div>
        );
    }
}

export default App;
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();