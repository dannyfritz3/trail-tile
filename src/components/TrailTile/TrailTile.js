import React from 'react';
import '../../styles/TrailTile.css';
import TrailTitle from './TrailTitle';
import TrailCondition from './TrailCondition';
import TrailOtherInfo from './TrailOtherInfo';
import BullitenPost from './BulletinBoard/BullitenPost'
import TrailWeatherOutlook from './TrailWeather/TrailWeatherOutlook';
import TrailWeatherOutlookDay from './TrailWeather/TrailWeatherOutlookDay';
import axios from 'axios';

class TrailTile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            componentArray: [],
            bulletinBoardReceived: false,
            windowWidth: this.props.windowWidth,
            windowHeight: this.props.windowHeight,
            weatherData: {rainfall: 0, windspeed: 0, cloudcover: 0},
            forecastTemps: [],
            liveWeatherData: {
                temp: 0,
                precipitation: 0,
                wind_speed: 0,
                wind_direction: ""
            },
            weatherOutlookComponentArray: []
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            windowWidth: nextProps.windowWidth,
            winodwHeight: nextProps.windowHeight
        })
    }

    render(props) {
        const clickTrailTile = async (event) => {
            var el = event.currentTarget;
            if (!el.classList.contains("active-tile")) {
                el.classList.remove("inactive-tile");
                el.classList.add("active-tile");
                getBulletinMessages();
                await getWeatherData();
            } else {
                el.classList.remove("active-tile");
                el.classList.add("inactive-tile");
            }
        };

        const getWeatherData = async () => {
            const climacellKey = '1OwEaPcEHqfKpUTeHZUfMOyK3nyz3PcY';
            var fieldsArray = ["temp", "weather_code", "wind_speed", "wind_direction", "precipitation"];
            debugger;
            await axios.get(`https://api.climacell.co/v3/weather/realtime?apikey=${climacellKey}&lat=${this.props.trail.latitude}&lon=${this.props.trail.longitude}&fields=${fieldsArray}&unit_system=us`).then((response) => {
                this.setState({
                    liveWeatherData: response.data
                });
            });

            await axios.get(`https://api.climacell.co/v3/weather/forecast/daily?apikey=${climacellKey}&lat=${this.props.trail.latitude}&lon=${this.props.trail.longitude}&fields=${fieldsArray}&unit_system=us`).then((response) => {
                this.setState({
                    forecastTemps: response.data.slice(0,5)
                });
                populateWeatherOutlookArray(this.state.forecastTemps);
            });
        };

        const populateWeatherOutlookArray = (forecastTemps) => {
            var arr = [];
            for (var i = 0; i < forecastTemps.length; i++) {
                var forecastDay = forecastTemps[i].observation_time;
                var forecastHigh = parseInt(forecastTemps[i].temp[1].max.value);
                var forecastLow = parseInt(forecastTemps[i].temp[0].min.value);
                var weatherCode = forecastTemps[i].weather_code.value;
                arr.push(<TrailWeatherOutlookDay weatherDay={forecastDay} forecastHigh={forecastHigh}
                    forecastLow={forecastLow} weatherCode={weatherCode} isToday={i === 0} />);
            }
            this.setState({
                weatherOutlookComponentArray: arr
            });
        };

        const getBulletinMessages = () => {
            // var posts = [];
            // axios.get("http://localhost:4000/getBulletinBoard/" + this.props.trail_id).then((response) => {
            //     this.setState({
            //         posts: response.data
            //     });
            //     posts = response.data
            //     poplulateMessagesComponentArray(posts);
            // });
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

        return (
            <div style={this.state.windowWidth < 600 ? {transform: 'scale(0.75)'} : {transform: 'scale(1)'}} className="trail-tile inactive-tile" onClick={(e) => clickTrailTile(e)}>
                <div className="trail-tile-header">
                    <TrailTitle trailName={this.props.trail.trailName} trailLocation={this.props.trail.city} reimtbX={this.props.reimtbX} reimtbY={this.props.reimtbY} changeMapHandler={this.props.changeMapEvent} />
                    <TrailCondition trailCondition={this.props.trail.trailStatus === "Melting Do Not Ride" ? "Melting" : this.props.trail.trailStatus} trailTimestamp={this.props.trail.updatedAt} />
                </div>
                <div onClick={(event) => {event.stopPropagation()}}>
                    <TrailWeatherOutlook weatherOutlookComponentArray={this.state.weatherOutlookComponentArray} liveWeatherData={this.state.liveWeatherData} />
                    <TrailOtherInfo trailComments={this.props.trail.description} updatedAt={this.props.trail.updatedAt} trailAuthor={this.props.username} trailRid={this.props.trailforksMapId} trailId={this.props.trail_id} bulletinPosts={this.state.componentArray} />
                </div>
            </div>
        );
    }
}

export default TrailTile;