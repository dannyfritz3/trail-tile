import React from 'react';

class TrailWeatherOtherData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rainfall: 0,
            windspeed: 0,
            cloudcover: 0
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            rainfall: nextProps.rainfall,
            windspeed: nextProps.windspeed,
            cloudcover: nextProps.cloudcover
        })
    }
    render(props) {
        return (
            <div style={{display: 'inline-block', float: 'right', height: '100%', width: '150px'}}>
                <div className="weather-other-data-block" style={{display: 'block', height: '33px'}}><b>Rainfall: </b>{this.state.rainfall}</div>
                <div className="weather-other-data-block" style={{display: 'block', height: '33px'}}><b>Windspeed: </b>{this.state.windspeed}</div>
                <div className="weather-other-data-block" style={{display: 'block', height: '33px'}}><b>Cloud Cover: </b>{this.state.cloudcover}</div>
            </div>
        );
    }
}

export default TrailWeatherOtherData;