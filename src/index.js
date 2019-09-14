import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';

const trailData = [
    {
        name:"Theodore Wirth",
        location:"Goledn Valley, MN",
        condition:"Tacky"
    },
    {
        name:"Carver Lake",
        location:"Woodbury, MN",
        condition:"Dry"
    },
    {
        name:"Lebanon Hills",
        location:"Eagan, MN",
        condition:"Wet, Do Not Ride"
    }
];

class TrailInfo extends React.Component{
    render(props){
        return (
            <div className="trail-info">
                <h3 className="trail-name">{this.props.trailName}</h3>
                <h5 className="trail-location">{this.props.trailLocation}</h5>
            </div>
        );
    }
}

class TrailCondition extends React.Component{
    render(props){
        return (
            <div className="trail-condition">
                <img></img>
                <h6>{this.props.trailCondition}</h6>
            </div>
        );
    }
}

class StravaData extends React.Component{
    render(props){
        return (
            <div>
                <div>
                    <h4>Rides Today</h4>
                    <span>14</span>
                </div>
                <div>
                    <h4>Some Other Data</h4>
                    <span>27</span>
                </div>
            </div>
        );
    }
}

class TrailMap extends React.Component{
    render(props){
        return (
            <img></img>
        );
    }
}

const TrailTileList = (props) => (
	<div>
  	{props.trails.map(trail => <TrailTile {...trail}/>)}
	</div>
);

class TrailTile extends React.Component{
    render(props) {
        return(
            <div>
                <TrailInfo trailName={this.props.name} trailLocation={this.props.location}/>
                <TrailCondition trailCondition={this.props.condition}/>
                <StravaData />
                <TrailMap />
            </div>
        );
    }
}

class App extends React.Component{
    state = {
        trails: trailData,
    };

    render() {
        return(
            <div>
                <h1>Hello React</h1>
                <TrailTileList trails={this.state.trails} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
