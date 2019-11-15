import React from 'react';
import './trail-tile.css';

function clickTrailTile(el) {
  if(!el.classList.contains("active-tile")){
    el.classList.add("active-tile");
  } else {
    el.classList.remove("active-tile");
  }
}


class TrailTitle extends React.Component{
    render(props) {
        return (
            <div className="info-div">
                <h1 className="trail-heading">{this.props.trailName}</h1>
                <h4 className="location-heading">{this.props.trailLocation}</h4>
                <img class="view-trail-icon" src="https://cdn2.iconfinder.com/data/icons/pittogrammi/142/61-512.png" alt="icon" onclick="viewTrailOnMap(event, this)"/>
            </div>
        )
    };
}

class TrailCondition extends React.Component{
    render(props) {
        return (
            <div className="condition-div">
                <img className="condition-square" src={this.props.trailSquareUrl} alt="logo"/>
                <p className="condition-heading">{this.props.trailCondition}</p>
                <h6 className="last-updated-heading">Last Updated: <i>{this.props.trailLastUpdated}</i></h6>
            </div>
        );
    }
}

class TrailOtherInfo extends React.Component{
    render(props) {
        return (
            <div className="other-info">
                <p>{this.props.TrailAdminMessage}</p>
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
            <label class="tab-label" for="chck1">
                <p class="segment-status">Closed</p>
                <img class="segment-difficulty" src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Ski_trail_rating_symbol-green_circle.svg"/>
                <TrailOtherInfoTabContents/>
            </label>
        );
    }
}

class TrailOtherInfoTabContents extends React.Component{
    render(props) {
        return (
            <div class="tab-content">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, reiciendis!
            </div>
        );
    }
}

class TrailTile extends React.Component{
    render(props) {
        return(
            <div className="trail-tile" onClick={clickTrailTile(this)}>
                <TrailTitle trailName={this.props.name} trailLocation={this.props.location}/>
                <TrailCondition trailCondition={this.props.condition} trailSquareUrl={this.props.trailSquareUrl} trailLastUpdated={this.props.lastUpdated}/>
                <TrailOtherInfo trailAdminMessage={this.props.adminMessage}/>
            </div>
        );
    }
}

export default TrailTile;