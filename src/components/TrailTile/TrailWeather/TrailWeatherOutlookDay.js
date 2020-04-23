import React from 'react';

class TrailWeatherOutlookDay extends React.Component {
    render(props) {
        return (
            <div class="outlook" style={{position: 'relative'}}>
                <p style={{fontSize: '15px'}} class="day-header">{this.props.weatherDay}</p>
                <img class="weather-icon" alt="icon"
                src="https://www.shareicon.net/data/128x128/2016/10/29/848790_weather_512x512.png"/>
                <p class="temp-header"><b>{this.props.weatherTemp}</b></p>
            </div>
        );
    }
}

export default TrailWeatherOutlookDay;