import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router-dom';
import '../../styles/App.css';
import * as serviceWorker from '../../serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import trail_data from '../../trail_data.json';
import PageHeader from './PageHeader';
import TrailTileListContainer from './TrailTileListContainer';
import ReiMtbProjectMap from './ReiMtbProjectMap';
import About from './About';
import Login from './Login';

class App extends React.Component {
    constructor(props){
        super(props);
        this.changeMapEvent = this.changeMapEvent.bind(this);
    }
    state = {
        trails: trail_data,
        currentMapId: "3438",
        currentMapX: "-10532963",
        currentMapY: "5821316",
        currentMapZ: "5.7"
    };
    changeMapEvent (event, reimtbX, reimtbY) {
        event.stopPropagation();
        this.setState({currentMapX: reimtbX,
                        currentMapY: reimtbY,
                        currentMapZ: 10.0});
        ReactDOM.render(<ReiMtbProjectMap />, document.getElementById('map-container'));
    }
    render() {
        return(
            <div id="page-container">
                <PageHeader />
                <div id="content-wrap">
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route exact path="/">
                        <TrailTileListContainer trailList={this.state.trails} changeMapEvent={this.changeMapEvent}/>
                        <ReiMtbProjectMap reimtbX={this.state.currentMapX} reimtbY={this.state.currentMapY} reimtbZ={this.state.currentMapZ} />
                    </Route>
                </div>
            </div>
        );
    }
}

export default App;
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();