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
import axios from 'axios';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            trails: []
        };
    }

    componentWillMount() {
        axios.get('http://localhost:4000/trails').then((response) => {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            };
            this.setState({trails: response.data});
        });
    }

    render() {
        const changeMapEvent = (event, reimtbX, reimtbY) => {
            event.stopPropagation();
            var contentHeight = document.getElementById('content-wrap').clientHeight;
            var mapSrc = "https://www.mtbproject.com/widget/map?favs=0&location=fixed"+ 
            "&x=" + reimtbX +
            "&y=" + reimtbY +
            "&z=12.2" +
            "&h=" + contentHeight;
    
            document.getElementById("map").src = mapSrc;
        };
        return(
            <div id="page-container">
                <PageHeader />
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
                    <ContentWrap trailList={this.state.trails} changeMapEvent={changeMapEvent} />
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