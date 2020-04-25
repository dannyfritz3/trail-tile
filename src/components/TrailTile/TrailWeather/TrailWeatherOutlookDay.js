import React from 'react';
import {parseWeatherDate} from '../../../utils';

class TrailWeatherOutlookDay extends React.Component {
    render(props) {
        debugger;
        return (
            <div class="outlook" style={{position: 'relative'}}>
                <p style={{fontSize: '15px'}} class="day-header"><b>{parseWeatherDate(this.props.weatherDay)}</b></p>
                <img class="weather-icon" alt="icon"
                src="https://www.shareicon.net/data/128x128/2016/10/29/848790_weather_512x512.png"/>
                <p class="temp-header">{this.props.forecastLow} | {this.props.forecastHigh}</p>
            </div>
        );
    }
}

export default TrailWeatherOutlookDay;