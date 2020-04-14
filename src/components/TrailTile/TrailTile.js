import React from 'react';
import '../../styles/TrailTile.css';
import TrailTitle from './TrailTitle';
import TrailCondition from './TrailCondition';
import TrailOtherInfo from './TrailOtherInfo';
import BullitenPost from './BullitenPost'
import axios from 'axios';

class TrailTile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            componentArray: []
        }
    }

    render(props) {
        const getBulletinMessages = () => {
            var posts = [];
            axios.get("http://localhost:4000/getBulletinBoard/" + this.props.trail_id).then((response) => {
                this.setState({
                    posts: response.data
                });
                posts = response.data
                poplulateMessagesComponentArray(posts);
            });
        };

        const poplulateMessagesComponentArray = (posts) => {
            var messages = [];
            for (var i = 0; i < posts.length; i++) {
                var postUsername = posts[i][0];
                var postMessage = posts[i][2];
                var postTimestamp = posts[i][1];
                messages.push(<BullitenPost postAuthor={postUsername} postMessage={postMessage} postTimestamp={postTimestamp} />);
            }
            this.setState({
                componentArray: messages
            });
        };

        const clickTrailTile = (event) => {
            var el = event.currentTarget;
            if (!el.classList.contains("active-tile")) {
                el.classList.remove("inactive-tile");
                el.classList.add("active-tile");
                getBulletinMessages();
            } else {
                el.classList.remove("active-tile");
                el.classList.add("inactive-tile");
            }
        };

        return (
            <div className="trail-tile inactive-tile" onClick={(e) => clickTrailTile(e)}>
                <div className="trail-tile-header">
                    <TrailTitle trailName={this.props.name} trailLocation={this.props.location} reimtbX={this.props.reimtbX} reimtbY={this.props.reimtbY} changeMapHandler={this.props.changeMapEvent} />
                    <TrailCondition trailCondition={this.props.condition === "Melting Do Not Ride" ? "Melting" : this.props.condition} trailTimestamp={this.props.parsedTimestamp} />
                </div>
                <TrailOtherInfo trailComments={this.props.comments} trailAuthor={this.props.username} trailRid={this.props.trailforksMapId} trailId={this.props.trail_id} bulletinPosts={this.state.componentArray} />
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