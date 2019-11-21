import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
import TrailTile from './trail-tile.js';
import 'bootstrap/dist/css/bootstrap.min.css';

const condition_colors = {
	red: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEX/AAAZ4gk3AAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC",
	green: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAElBMVEVAygOW4HdEvwQ8zQA9ywRBygBw60gpAAABAUlEQVR4nO3PARGAMAwAsQKdf8vo+F3iIPO8387ZPXMrwz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+w7wfv64YnTVjj7gAAAAASUVORK5CYII=",
	blue: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAMAAAD8CC+4AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTk1Q0Y4REEyNUI0MTFFNUFGMjNBQkRDMkYyREUzQjQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NTk1Q0Y4REIyNUI0MTFFNUFGMjNBQkRDMkYyREUzQjQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1OTVDRjhEODI1QjQxMUU1QUYyM0FCREMyRjJERTNCNCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1OTVDRjhEOTI1QjQxMUU1QUYyM0FCREMyRjJERTNCNCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pm0ofMwAAAAGUExURQAA/wAAAHtivz4AAAELSURBVHja7MEBAQAAAIIg/69uSEABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMCXCTAA0rEAAfNqb64AAAAASUVORK5CYII="
};

const trailData = [
    {
        name:"Theodore Wirth",
        lastUpdated:"Yesterday",
        location:"Goledn Valley, MN",
        condition:"Tacky",
        squareUrl:condition_colors.green,
        adminMessage:"Storms overnight. Please stay off all MOCA/MORC managed trails at Theo until they have a chance to thoroughly dry."
    },
    {
        name:"Carver Lake",
        lastUpdated:"Today",
        location:"Woodbury, MN",
        condition:"Dry",
        squareUrl:condition_colors.green,
        adminMessage:"Storms overnight. Please stay off all MOCA/MORC managed trails at Theo until they have a chance to thoroughly dry."
    },
    {
        name:"Lebanon Hills",
        lastUpdated:"Today",
        location:"Eagan, MN",
        condition:"Closed",
        squareUrl:condition_colors.red,
        adminMessage:"Storms overnight. Please stay off all MOCA/MORC managed trails at Theo until they have a chance to thoroughly dry."
    },
    {
	name:"Battle Creek",
	lastUpdated:"Today",
	location:"St. Paul, MN",
	condition:"Wet",
	squareUrl:condition_colors.blue,
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
