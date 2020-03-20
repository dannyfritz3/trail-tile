import React from 'react';
import '../../styles/TrailTile.css';
import TrailTitle from './TrailTitle';
import TrailCondition from './TrailCondition';
import TrailOtherInfo from './TrailOtherInfo';

class TrailTile extends React.Component {
    constructor(props) {
        super(props)
        this.clickTrailTile = this.clickTrailTile.bind(this);
    }
    clickTrailTile(event) {
        var el = event.currentTarget;
        if (!el.classList.contains("active-tile")) {
            el.classList.remove("inactive-tile");
            el.classList.add("active-tile");
        } else {
            el.classList.remove("active-tile");
            el.classList.add("inactive-tile");
        }
    }

    render(props) {
        return (
            <div className="trail-tile inactive-tile" onClick={(e) => this.clickTrailTile(e)}>
                <div className="trail-tile-header">
                    <TrailTitle trailName={this.props.name} trailLocation={this.props.location} reimtbX={this.props.reimtbX} reimtbY={this.props.reimtbY} changeMapHandler={this.props.changeMapEvent} />
                    <TrailCondition trailCondition={this.props.condition} trailTimestamp={this.props.parsedTimestamp} />
                </div>
                <TrailOtherInfo trailComments={this.props.comments} trailAuthor={this.props.username} trailRid={this.props.trailforksMapId} />
                {/* <TrailWeatherOutlook /> */}
            </div>
        );
    }
}

export default TrailTile;
// class TrailWeatherOutlook extends React.Component {
//     render(props) {
//         return (
//             <div class="other-info">
//                 <div class="weather-div">
//                     <div class="weather-outlook-div">
//                         <TrailWeatherOutlookDay weatherDay="June 4" weatherTemp="75"/>
//                         <TrailWeatherOutlookDay weatherDay="June 4" weatherTemp="75"/>
//                         <TrailWeatherOutlookDay weatherDay="June 4" weatherTemp="75"/>
//                         <TrailWeatherOutlookDay weatherDay="June 4" weatherTemp="75"/>
//                         <TrailWeatherOutlookDay weatherDay="June 4" weatherTemp="75"/>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }

// class TrailWeatherOutlookDay extends React.Component {
//     render(props) {
//         return (
//             <div class="outlook">
//                 <p class="day-header">{this.props.weatherDay}</p>
//                 <img class="weather-icon"
//                 src="https://www.shareicon.net/data/128x128/2016/10/29/848790_weather_512x512.png"/>
//                 <p class="temp-header">{this.props.weatherTemp}</p>
//             </div>
//         );
//     }
// }