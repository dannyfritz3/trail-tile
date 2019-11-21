import React from 'react';
import './trail-tile.css';

class TrailTitle extends React.Component{
    constructor(props){
        super(props);
        this.viewTrailOnMap = this.viewTrailOnMap.bind(this);
    }
    viewTrailOnMap(event) {
        var el = event.target;
        event.stopPropagation();
        var trailNameClicked = el.parentElement.firstElementChild.innerText;
        //document.getElementById("masterMap").src = map_data[trailNameClicked];
    }

    render(props) {
        return (
            <div className="info-div">
                <h1 className="trail-heading">{this.props.trailName}</h1>
                <h4 className="location-heading">{this.props.trailLocation}</h4>
                <img className="view-trail-icon" src="https://cdn2.iconfinder.com/data/icons/pittogrammi/142/61-512.png" alt="icon" onClick={(e) => this.viewTrailOnMap(e)}/>
            </div>
        )
    };
}

class TrailCondition extends React.Component{
    render(props) {
        return (
            <div className="condition-div">
                <img className="condition-square" src={this.props.trailSquareUrl} alt="logo"/>
                <p className="condition-heading"><b>{this.props.trailCondition}</b></p>
                <h6 className="last-updated-heading">Last Updated: <i>{this.props.trailLastUpdated}</i></h6>
            </div>
        );
    }
}

class TrailOtherInfo extends React.Component{
    render(props) {
        return (
            <div className="other-info">
                <p>{this.props.trailAdminMessage}</p>
                <h5>Trail Sections</h5>
                <div className="tabs">
                    <TrailOtherInfoTab/>
                </div>
            </div>
        );
    }
}

class TrailOtherInfoTab extends React.Component{
    render(props) {
        return (
            <div className="tab">
                <input type="checkbox" id="chck1"/>
                <TrailOtherInfoTabLabel/>
            </div>
        );
    }
}

class TrailOtherInfoTabLabel extends React.Component{
    render(props) {
        return (
            <label className="tab-label" for="chck1">
                <p className="segment-status">Closed</p>
                <img className="segment-difficulty" src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Ski_trail_rating_symbol-green_circle.svg" alt="icon"/>
                <TrailOtherInfoTabContents/>
            </label>
        );
    }
}

class TrailOtherInfoTabContents extends React.Component{
    render(props) {
        return (
            <div className="tab-content">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, reiciendis!
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
                <TrailTitle trailName={this.props.name} trailLocation={this.props.location}/>
                <TrailCondition trailCondition={this.props.condition} trailSquareUrl={this.props.squareUrl} trailLastUpdated={this.props.lastUpdated}/>
                <TrailOtherInfo trailAdminMessage={this.props.adminMessage}/>
            </div>
        );
    }
}

export default TrailTile;