import React from 'react';
import './styles/trail-tile.css';

class TrailTitle extends React.Component{
    constructor() {
        super();
        this.changeMapHandler = this.changeMapHandler.bind(this);
      }
    
      changeMapHandler(e, rid){
        this.props.changeMapHandler(e, rid);
      }
    render(props) {
        return (
            <div className="info-div">
                <h2 className="trail-heading" style={this.props.trailName.length >= 18 ? {fontSize:"30px"} : {} }><b>{this.props.trailName}</b></h2>
                <h4 className="location-heading">{this.props.trailLocation}</h4>
                <img className="view-trail-icon" src="https://cdn2.iconfinder.com/data/icons/pittogrammi/142/61-512.png" 
                alt="icon" onClick={(e) => this.changeMapHandler(e, this.props.trailRid)}/>
            </div>
        )
    };
}

class TrailCondition extends React.Component{
    constructor(props){
        super(props);
        this.determineConditionSquareColor = this.determineConditionSquareColor.bind(this);
    }

    determineConditionSquareColor(condition) {
        switch(condition){
            case("Dry"): return "limegreen";
            case("Tacky"): return "limegreen";
            case("Fat Tires"): return "dodgerblue";
            case("Packed"): return "dodgerblue";
            case("Wet"): return "firebrick";
            case("Closed"): return "firebrick";
            default: return "firebrick";
        }
    }

    render(props) {
        return (
            <div className="condition-div">
                <div className="condition-square" style={{backgroundColor: this.determineConditionSquareColor(this.props.trailCondition)}}></div>
                <p className="condition-heading"><b>{this.props.trailCondition}</b></p>
                <h6 className="last-updated-heading">Last Updated: <i>{this.props.trailTimestamp}</i></h6>
            </div>
        );
    }
}

class TrailOtherInfo extends React.Component {
    render(props) {
        return (
            <div className="other-info">
                <div className="TrailforksRegionInfo" data-w="477px" data-h="150px" data-rid={this.props.trailRid} data-counts="1" data-stats="0" data-title="0"></div>
                <p><b>{this.props.trailAuthor}</b> <i>{this.props.trailComments}</i></p>
            </div>
        )
    }
}

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

class TrailTile extends React.Component{
    constructor(props) {
        super(props)
        this.clickTrailTile = this.clickTrailTile.bind(this);
    }
        clickTrailTile(event) {
            var el = event.currentTarget;
            if(!el.classList.contains("active-tile")){
                el.classList.remove("inactive-tile");
                el.classList.add("active-tile");
            } else {
                el.classList.remove("active-tile");
                el.classList.add("inactive-tile");
            }
        }

    render(props) {
        return(
            <div className="trail-tile inactive-tile" onClick={(e) => this.clickTrailTile(e)}>
                <TrailTitle trailName={this.props.name} trailLocation={this.props.location} trailRid={this.props.trailforksMapId} changeMapHandler={this.props.changeMapEvent}/>
                <TrailCondition trailCondition={this.props.condition} trailTimestamp={this.props.parsedTimestamp}/>
                <TrailOtherInfo trailComments={this.props.comments} trailAuthor={this.props.username} trailRid={this.props.trailforksMapId}/>
                {/* <TrailWeatherOutlook /> */}
            </div>
        );
    }
}

export default TrailTile;