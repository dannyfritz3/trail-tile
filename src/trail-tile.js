import React from 'react';
import './styles/trail-tile.css';
import ReactDOM from 'react-dom';
import TrailMapContainerTrailForks from './index.js';

class TrailTitle extends React.Component{
    constructor(props){
        super(props);
        this.viewTrailOnMap = this.viewTrailOnMap.bind(this);
    }
    viewTrailOnMap(event) {
        var el = event.target;
        event.stopPropagation();
        this.changeCurrentMapId(this.props.trailforksMapId);
        ReactDOM.render(<TrailMapContainerTrailForks mapId={this.props.trailforksMapId}/>, 
            document.getElementById("content"));
        // document.getElementById("masterMap").src = map_data[trailNameClicked];
    }

    render(props) {
        return (
            <div className="info-div">
                <h2 className="trail-heading" style={this.props.trailName.length >= 18 ? {fontSize:"30px"} : {} }><b>{this.props.trailName}</b></h2>
                <h4 className="location-heading">{this.props.trailLocation}</h4>
                <img className="view-trail-icon" src="https://cdn2.iconfinder.com/data/icons/pittogrammi/142/61-512.png" 
                alt="icon" onClick={(e) => this.viewTrailOnMap(e)}/>
            </div>
        )
    };
}

class TrailCondition extends React.Component{
    constructor(props){
        super(props);
        this.determineConditionSquareColor = this.determineConditionSquareColor.bind(this);
    }

    determineConditionSquareColor(condition) {
        const condition_colors = {
            red: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEX/AAAZ4gk3AAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC",
            green: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAElBMVEVAygOW4HdEvwQ8zQA9ywRBygBw60gpAAABAUlEQVR4nO3PARGAMAwAsQKdf8vo+F3iIPO8387ZPXMrwz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+wz7DPsM+w7wfv64YnTVjj7gAAAAASUVORK5CYII=",
            blue: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAMAAAD8CC+4AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTk1Q0Y4REEyNUI0MTFFNUFGMjNBQkRDMkYyREUzQjQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NTk1Q0Y4REIyNUI0MTFFNUFGMjNBQkRDMkYyREUzQjQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1OTVDRjhEODI1QjQxMUU1QUYyM0FCREMyRjJERTNCNCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1OTVDRjhEOTI1QjQxMUU1QUYyM0FCREMyRjJERTNCNCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pm0ofMwAAAAGUExURQAA/wAAAHtivz4AAAELSURBVHja7MEBAQAAAIIg/69uSEABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMCXCTAA0rEAAfNqb64AAAAASUVORK5CYII="
        };
        switch(condition){
            case("Dry"): return condition_colors["green"];
            case("Tacky"): return condition_colors["green"];
            case("Fat Tires"): return condition_colors["blue"];
            case("Packed"): return condition_colors["blue"];
            case("Wet"): return condition_colors["red"];
            case("Closed"): return condition_colors["red"];
            default: return condition_colors["red"];
        }
    }

    render(props) {
        return (
            <div className="condition-div">
                <img className="condition-square" src={this.determineConditionSquareColor(this.props.trailCondition)} alt="condition"/>
                <p className="condition-heading"><b>{this.props.trailCondition}</b></p>
                <h6 className="last-updated-heading">Last Updated: <i>{this.props.trailTimestamp}</i></h6>
            </div>
        );
    }
}

class TrailWeatherOutlook extends React.Component {
    render(props) {
        return (
            <div class="other-info">
                <div class="weather-div">
                    <div class="weather-outlook-div">
                        <TrailWeatherOutlookDay weatherDay="June 4" weatherTemp="75"/>
                        <TrailWeatherOutlookDay weatherDay="June 4" weatherTemp="75"/>
                        <TrailWeatherOutlookDay weatherDay="June 4" weatherTemp="75"/>
                        <TrailWeatherOutlookDay weatherDay="June 4" weatherTemp="75"/>
                        <TrailWeatherOutlookDay weatherDay="June 4" weatherTemp="75"/>
                    </div>
                </div>
            </div>
        );
    }
}

class TrailWeatherOutlookDay extends React.Component {
    render(props) {
        return (
            <div class="outlook">
                <p class="day-header">{this.props.weatherDay}</p>
                <img class="weather-icon" 
                src="https://www.shareicon.net/data/128x128/2016/10/29/848790_weather_512x512.png"/>
                <p class="temp-header">{this.props.weatherTemp}</p>
            </div> 
        );
    }
}

class TrailTile extends React.Component{
    constructor(props) {
        super(props)
        this.clickTrailTile = this.clickTrailTile.bind(this);
    }
        clickTrailTile(event) {
            var el = event.currentTarget;
            if(!el.classList.contains("active-tile")){
              el.classList.add("active-tile");
            } else {
              el.classList.remove("active-tile");
            }
        }

    render(props) {
        return(
            <div className="trail-tile" onClick={(e) => this.clickTrailTile(e)}>
                <TrailTitle trailName={this.props.name} trailLocation={this.props.location} 
                trailforksMapId={this.props.trailforksMapId}/>
                <TrailCondition trailCondition={this.props.condition} trailTimestamp={this.props.parsedTimestamp}/>
                {/* <TrailWeatherOutlook /> */}
            </div>
        );
    }
}

export default TrailTile;