import React from 'react';

class TrailWeatherOtherData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            style: {
                padding: "5px",
                float: "left",
                display: "inline",
                height: "30px",
                width: "30px"
            }
        }
    }

    render(props) {
        var currentTemp = parseInt(this.props.liveWeatherData.temp.value);
        var currentPrecipitation = parseInt(this.props.liveWeatherData.precipitation.value);
        var currentWindSpeed = parseInt(this.props.liveWeatherData.wind_speed.value);
        var currentWindDirection = parseInt(this.props.liveWeatherData.wind_direction.value);
        return (
            <div style={{display: 'inline-block', float: 'right', height: '100%', width: '75px'}}>
                <div className="weather-other-data-block" style={{ display: 'block', height: '33px' }}>
                    <img style={this.state.style} src={require("../../../Resource/Icons/WeatherIcons/icons8-thermometer-50.png")} alt="wind" />
                    <div style={{ display: "inline" }}>{currentTemp}</div>
                </div>
                <div className="weather-other-data-block" style={{display: 'block', height: '33px'}}>
                    <img style={this.state.style} src={require("../../../Resource/Icons/WeatherIcons/icons8-wet-50.png")} alt="wind" />
                    <div style={{display: "inline"}}>{currentPrecipitation}</div>
                </div>
                <div className="weather-other-data-block" style={{display: 'block', height: '33px'}}>
                    <img style={this.state.style} src={require("../../../Resource/Icons/WeatherIcons/icons8-windsock-50.png")} alt="wind" />
                    <div style={{display: "inline"}}>{currentWindSpeed}</div>
                </div>
            </div>
        );
    }
}

export default TrailWeatherOtherData;