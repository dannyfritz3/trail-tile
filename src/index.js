import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import * as serviceWorker from './serviceWorker';
import TrailTile from './trail-tile.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import trail_data from './trail_data.json';
import Script from 'react-load-script';

const condition_colors = {
	red: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEX/AAAZ4gk3AAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC",
	green: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAElBMVEVAygOW4HdEvwQ8zQA9ywRBygBw60gpAAABAUlEQVR4nO3PARGAMAwAsQKdf8vo+F3iIPO8387ZPXMrwz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+w7wfv64YnTVjj7gAAAAASUVORK5CYII=",
	blue: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAMAAAD8CC+4AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTk1Q0Y4REEyNUI0MTFFNUFGMjNBQkRDMkYyREUzQjQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NTk1Q0Y4REIyNUI0MTFFNUFGMjNBQkRDMkYyREUzQjQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1OTVDRjhEODI1QjQxMUU1QUYyM0FCREMyRjJERTNCNCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1OTVDRjhEOTI1QjQxMUU1QUYyM0FCREMyRjJERTNCNCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pm0ofMwAAAAGUExURQAA/wAAAHtivz4AAAELSURBVHja7MEBAQAAAIIg/69uSEABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMCXCTAA0rEAAfNqb64AAAAASUVORK5CYII="
};

const TrailTileList = (props) => (
	<div>
  	{props.trails.map(trail => <TrailTile {...trail}/>)}
	</div>
);

class PageHeader extends React.Component{
    render(props) {
        return (
            <div id="header">
                <ul className="nav-tabs">
                    <p id="logo">Minnesota Off-Road Cyclists</p>
                    <NavTab navTabTitle="About" linkRef="#about"/>
                    <NavTab navTabTitle="Community" linkRef="#community"/>
                    <NavTab navTabTitle="Events" linkRef="#events"/>


                </ul>
            </div>
        )
    };
}

class TrailTileListContainer extends React.Component{
    render(props) {
        return (
            <div id="sidebar">
                <TrailTileList trails={this.props.trailList} />
            </div>
        )
    };
}

class TrailMapContainer extends React.Component{
    render(props) {
        return (
            <div id="content">
                <iframe title="map" id="masterMap" style={{width:'100%', maxWidth:'100vw', maxHeight:'100vh', height:'100%'}} frameBorder="0" scrolling="no" src={this.props.mapSrc}></iframe>
            </div>
        )
    }
}

class TrailMapContainerTrailForks extends React.Component {
    render(props) {
        return (
            <div id="content">
                <div class="TrailforksWidgetMap" data-w="100%" data-h="500vh" data-rid="1" data-activitytype="1" data-maptype="trailforks" data-trailstyle="difficulty" data-controls="0" data-list="0" data-dml="1" data-layers="labels,poi,polygon,directory,region" data-z="" data-lat="" data-lon="" data-hideunsanctioned="0"></div>
            </div>
        );
    }
}

class NavTab extends React.Component{
    render(props) {
        return (
        <li className="nav-tab active-left" style={{float:'right'}}><a className="nav-tab-link" href={this.props.linkRef}>{this.props.navTabTitle}</a></li>
        )
    };
}

class App extends React.Component{
    state = {
        trails: trail_data,
    };

    render() {
        return(
            <div id="page-container">
                <div id="content-wrap">
                    <PageHeader />
                    <TrailTileListContainer trailList={this.state.trails}/>
                </div>
                <TrailMapContainer mapSrc="https://www.mtbproject.com/widget/map?favs=0&location=fixed&x=-10478086&y=5827237&z=5.5&h=1000"/>
                {/* <TrailMapContainerTrailForks /> */}
            </div>
        );
    }
}

export default TrailMapContainer;
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
