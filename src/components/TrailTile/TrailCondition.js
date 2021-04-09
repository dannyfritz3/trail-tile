import React from 'react';

class TrailCondition extends React.Component {
    constructor(props) {
        super(props);
        this.determineConditionSquareColor = this.determineConditionSquareColor.bind(this);
    }

    determineConditionSquareColor(condition) {
        switch (condition) {
            case ("Dry"): return "#558B6E";
            case ("Open"):return "#558B6E"
            case ("Tacky"): return "#558B6E";
            case ("Fat Tires"): return "#0B4F6C";
            case ("Packed"): return "#0EB1D2";
            case ("Wet"): return "#A4243B";
            case ("Closed"): return "#A4243B";
            default: return "#A4243B";
        }
    }

    getLastUpdated(milliseconds) {
        let date = new Date(milliseconds);
        let isoString = date.toISOString();
        let isoArray = isoString.split("T");
        let dateArray = isoArray[0].split("-");

        let timestamp_year = parseInt(dateArray[0]);
        let timestamp_day = parseInt(dateArray[2]);
        let timestamp_month = parseInt(dateArray[1]);

        let today = new Date();

        if(today.getFullYear() - timestamp_year === 0) {
            if(today.getMonth() + 1 === timestamp_month) {
                if(today.getDate() === timestamp_day) {
                    return "Today"
                } else if(today.getDate() - timestamp_day === 1) {
                    return "Yesterday"
                } else {
                    return `${today.getDate() - timestamp_day} days ago`
                }
            } else if ((today.getMonth() + 1) - timestamp_month === 1) {
                let days = 31 - timestamp_day + today.getDate();
                return `${days} days ago`;
            } else {
                return `${today.getMonth() - timestamp_month} months ago`
            }
        } else if(today.getFullYear() - timestamp_year === 1) {
            let months = 12 - timestamp_month + today.getMonth()
            return `${months} months ago`
        }
        else {
            return `${today.getFullYear() - timestamp_year} years ago`
        }
    }

    render(props) {
        return (
            <div className="condition-div">
                <div className="condition-square" style={{ backgroundColor: this.determineConditionSquareColor(this.props.trailCondition) }}></div>
                <p className="condition-heading"><b>{this.props.trailCondition}</b></p>
                <h6 className="last-updated-heading">Last Updated: <i>{this.getLastUpdated(this.props.trailTimestamp)}</i></h6>
            </div>
        );
    }
}

export default TrailCondition;