import React from 'react';
import { mapCoordinates } from '../../utils';

class TrailTitle extends React.Component {
    render(props) {
        const changeMapHandler = (e, reimtbX, reimtbY) => {
            this.props.changeMapHandler(e, reimtbX, reimtbY);
        };
        
        const resolveAnyLongTrailNames = (trailName) => {
            switch(trailName) {
                case "Cottage Grove Bike Park":
                    return "Cottage Grove"
                case "Bertram Chain of Lakes":
                    return "Chain of Lakes";
                case "Minnesota River Trail":
                    return "Minnesota River";
                case "Monarch Singletrack":
                    return "Monarch";
                default:
                    return trailName;
            }
        } 

        return (
            <div className="info-div">
                <h2 className="trail-heading"><b>{resolveAnyLongTrailNames(this.props.trailName)}</b></h2>
                <h4 className="location-heading">{this.props.trailLocation}</h4>
                <img className="view-trail-icon" src="https://cdn2.iconfinder.com/data/icons/pittogrammi/142/61-512.png"
                    alt="icon" onClick={(e) => changeMapHandler(e, mapCoordinates[this.props.trailName].reimtbX, mapCoordinates[this.props.trailName].reimtbY)} />
            </div>
        )
    };
}

export default TrailTitle;