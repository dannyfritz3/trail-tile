import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
import TrailTile from './trail-tile.js';
import 'bootstrap/dist/css/bootstrap.min.css';

debugger;

const trailData = [
    {
        name:"Theodore Wirth",
        lastUpdated:"Today",
        location:"Goledn Valley, MN",
        condition:"Tacky",
        squareUrl:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEX/AAAZ4gk3AAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC",
        adminMessage:"Storms overnight. Please stay off all MOCA/MORC managed trails at Theo until they have a chance to thoroughly dry."
    },
    {
        name:"Carver Lake",
        lastUpdated:"Today",
        location:"Woodbury, MN",
        condition:"Dry",
        squareUrl:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAElBMVEVAygOW4HdEvwQ8zQA9ywRBygBw60gpAAABAUlEQVR4nO3PARGAMAwAsQKdf8vo+F3iIPO8387ZPXMrwz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+w7wfv64YnTVjj7gAAAAASUVORK5CYII=",
        adminMessage:"Storms overnight. Please stay off all MOCA/MORC managed trails at Theo until they have a chance to thoroughly dry."
    },
    {
        name:"Lebanon Hills",
        lastUpdated:"Today",
        location:"Eagan, MN",
        condition:"Closed",
        squareUrl:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAElBMVEVAygOW4HdEvwQ8zQA9ywRBygBw60gpAAABAUlEQVR4nO3PARGAMAwAsQKdf8vo+F3iIPO8387ZPXMrwz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+w7wfv64YnTVjj7gAAAAASUVORK5CYII=",
        adminMessage:"Storms overnight. Please stay off all MOCA/MORC managed trails at Theo until they have a chance to thoroughly dry."
    }
];

const TrailTileList = (props) => (
	<div>
  	{props.trails.map(trail => <TrailTile {...trail}/>)}
	</div>
);

class App extends React.Component{
    state = {
        trails: trailData,
    };

    render() {
        return(
            <div>
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
