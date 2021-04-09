import React from 'react';
import {parseWindDirection} from '../../../utils';

class TrailWeatherOtherData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            liveWeatherData: {
                temp: 0,
                precipitation: 0,
                wind_speed: 0,
                wind_direction: ""
            },
            style: {
                padding: "5px",
                float: "left",
                display: "inline",
                height: "30px",
                width: "30px"
            }
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            liveWeatherData: {
                temp: nextProps.liveWeatherData.temp ? parseInt(nextProps.liveWeatherData.temp.value) : 0,
                precipitation: nextProps.liveWeatherData.precipitation ? parseInt(nextProps.liveWeatherData.precipitation.value) :0,
                wind_speed: nextProps.liveWeatherData.wind_speed ? parseInt(nextProps.liveWeatherData.wind_speed.value) : 0,
                wind_direction: nextProps.liveWeatherData.wind_direction ? parseWindDirection(nextProps.liveWeatherData.wind_direction.value) : ""
        }})
    }
    render(props) {
        return (
            <div className="trail-weather-other-data" style={{display: 'inline-block', float: 'right', height: '100%', width: '90px'}}>
                <div className="weather-other-data-block" style={{ display: 'block', height: '33px' }}>
                    <img style={this.state.style} src={require("../../../resource/Icons/WeatherIcons/icons8-thermometer-50.png")} alt="wind" />
                    <div style={{ display: "inline", fontSize: "11px"}}>{this.state.liveWeatherData.temp} <b>&#8457;</b></div>
                </div>
                <div className="weather-other-data-block" style={{display: 'block', height: '33px'}}>
                    <img style={this.state.style} src={require("../../../resource/Icons/WeatherIcons/icons8-wet-50.png")} alt="wind" />
                    <div style={{display: "inline", fontSize: "11px"}}>{this.state.liveWeatherData.precipitation} <b>in/hr</b></div>
                </div>
                <div className="weather-other-data-block" style={{display: 'block', height: '33px'}}>
                    <img style={this.state.style} src={require("../../../resource/Icons/WeatherIcons/icons8-windsock-50.png")} alt="wind" />
                    <div style={{display: "inline", fontSize: "11px"}}>{this.state.liveWeatherData.wind_speed} <b>mph {this.state.liveWeatherData.wind_direction}</b></div>
                </div>
            </div>
        );
    }
}

export default TrailWeatherOtherData;