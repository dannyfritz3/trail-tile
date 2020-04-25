import React from 'react';
import TrailWeatherOtherData from './TrailWeatherOtherData';

class TrailWeatherOutlook extends React.Component {
    render(props) {
        return (
            <div class="weather-div">
                <div class="weather-outlook-div">
                    <div style={{display: "inline-block", paddingTop: '5px'}}>
                        {this.props.weatherOutlookComponentArray}
                    </div>
                    <TrailWeatherOtherData liveWeatherData={this.props.liveWeatherData} />
                </div>
            </div>
        );
    }
}

export default TrailWeatherOutlook;