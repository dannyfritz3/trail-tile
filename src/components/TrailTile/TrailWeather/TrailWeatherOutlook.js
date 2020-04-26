import React from 'react';
import TrailWeatherOtherData from './TrailWeatherOtherData';

class TrailWeatherOutlook extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            liveWeatherData: {
                temp: 0,
                precipitation: 0,
                wind_speed: 0,
                wind_direction: ""
            }
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            liveWeatherData: {
                temp: nextProps.liveWeatherData.temp ? nextProps.liveWeatherData.temp.value : 0,
                precipitation: nextProps.liveWeatherData.precipitation ? nextProps.liveWeatherData.precipitation.value :0,
                wind_speed: nextProps.liveWeatherData.wind_speed ? nextProps.liveWeatherData.wind_speed.value : 0,
                wind_direction: nextProps.liveWeatherData.wind_direction ? nextProps.liveWeatherData.wind_direction.value : ""
            }
        });
    }

    render(props) {
        return (
            <div class="weather-div">
                <div class="weather-outlook-div">
                    <div style={{display: "inline-block", height: "100%"}}>
                        {this.props.weatherOutlookComponentArray}
                    </div>
                    <TrailWeatherOtherData liveWeatherData={this.props.liveWeatherData} />
                </div>
            </div>
        );
    }
}

export default TrailWeatherOutlook;