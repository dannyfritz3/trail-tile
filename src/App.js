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
    render() {
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
                    <ContentWrap />
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