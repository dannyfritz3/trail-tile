import React from 'react';
import TrailWeatherOtherData from './TrailWeatherOtherData';
import TrailWeatherOutlookDay from './TrailWeatherOutlookDay';

class TrailWeatherOutlook extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            weatherData: {}
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            weatherData: nextProps
        })
    }

    render(props) {
        return (
            <div class="weather-div">
                <div class="weather-outlook-div">
                    <div style={{display: "inline-block", paddingTop: '5px'}}>
                        <TrailWeatherOutlookDay weatherDay="April 19" weatherTemp="55" />
                        <TrailWeatherOutlookDay weatherDay="April 20" weatherTemp="45" />
                        <TrailWeatherOutlookDay weatherDay="April 21" weatherTemp="55" />
                        <TrailWeatherOutlookDay weatherDay="April 22" weatherTemp="60" />
                    </div>
                    <TrailWeatherOtherData rainfall={this.state.weatherData.rainfall} windspeed={this.state.weatherData.windspeed} cloudcover={this.state.weatherData.cloudcover} />
                </div>
            </div>
        );
    }
}

export default TrailWeatherOutlook;