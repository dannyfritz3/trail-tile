import React from 'react';

class TrailTitle extends React.Component {
    constructor() {
        super();
        this.changeMapHandler = this.changeMapHandler.bind(this);
    }

    changeMapHandler(e, reimtbX, reimtbY) {
        this.props.changeMapHandler(e, reimtbX, reimtbY);
    }

    render(props) {
        return (
            <div className="info-div">
                <h2 className="trail-heading"><b>{this.props.trailName === "Cottage Grove Bike Park" ? "Cottage Grove" : this.props.trailName}</b></h2>
                <h4 className="location-heading">{this.props.trailLocation}</h4>
                <img className="view-trail-icon" src="https://cdn2.iconfinder.com/data/icons/pittogrammi/142/61-512.png"
                    alt="icon" onClick={(e) => this.changeMapHandler(e, this.props.reimtbX, this.props.reimtbY)} />
            </div>
        )
    };
}

export default TrailTitle;