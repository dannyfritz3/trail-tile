import React from 'react';
import { mapCoordinates } from '../../utils';

class TrailTitle extends React.Component {
    render(props) {
        const changeMapHandler = (e, reimtbX, reimtbY) => {
            this.props.changeMapHandler(e, reimtbX, reimtbY);
        };
        
        console.log(this.props.trailName);
        
        return (
            <div className="info-div">
                <h2 className="trail-heading"><b>{this.props.trailName === "Cottage Grove Bike Park" ? "Cottage Grove" : this.props.trailName}</b></h2>
                <h4 className="location-heading">{this.props.trailLocation}</h4>
                <img className="view-trail-icon" src="https://cdn2.iconfinder.com/data/icons/pittogrammi/142/61-512.png"
                    alt="icon" onClick={(e) => changeMapHandler(e, mapCoordinates[this.props.trailName].reimtbX, mapCoordinates[this.props.trailName].reimtbY)} />
            </div>
        )
    };
}

export default TrailTitle;