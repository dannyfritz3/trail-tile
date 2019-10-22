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
                <ul className="info-dropdown">
                <p>{this.props.TrailAdminMessage}</p>
                <button id="segment-button">4 segments</button>
                </ul>
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