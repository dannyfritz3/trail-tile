import React from 'react';

class TrailCondition extends React.Component {
    constructor(props) {
        super(props);
        this.determineConditionSquareColor = this.determineConditionSquareColor.bind(this);
    }

    determineConditionSquareColor(condition) {
        switch (condition) {
            case ("Dry"): return "#558B6E";
            case ("Tacky"): return "#558B6E";
            case ("Fat Tires"): return "#0B4F6C";
            case ("Packed"): return "#0EB1D2";
            case ("Wet"): return "#A4243B";
            case ("Closed"): return "#A4243B";
            default: return "#A4243B";
        }
    }

    render(props) {
        return (
            <div className="condition-div">
                <div className="condition-square" style={{ backgroundColor: this.determineConditionSquareColor(this.props.trailCondition) }}></div>
                <p className="condition-heading"><b>{this.props.trailCondition}</b></p>
                <h6 className="last-updated-heading">Last Updated: <i>{this.props.trailTimestamp}</i></h6>
            </div>
        );
    }
}

export default TrailCondition;