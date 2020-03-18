import React from 'react';
import './styles/trail-tile.css';

class TrailTitle extends React.Component {
    constructor() {
        super();
        this.changeMapHandler = this.changeMapHandler.bind(this);
    }

    changeMapHandler(e, rid) {
        this.props.changeMapHandler(e, rid);
    }

    render(props) {
        return (
            <div className="info-div">
                <h2 className="trail-heading" style={this.props.trailName.length >= 18 ? { fontSize: "30px" } : {}}><b>{this.props.trailName}</b></h2>
                <h4 className="location-heading">{this.props.trailLocation}</h4>
                <img className="view-trail-icon" src="https://cdn2.iconfinder.com/data/icons/pittogrammi/142/61-512.png"
                    alt="icon" onClick={(e) => this.changeMapHandler(e, this.props.trailRid)} />
            </div>
        )
    };
}

class TrailCondition extends React.Component {
    constructor(props) {
        super(props);
        this.determineConditionSquareColor = this.determineConditionSquareColor.bind(this);
    }

    determineConditionSquareColor(condition) {
        switch (condition) {
            case ("Dry"): return "#558B6E";
            case ("Tacky"): return "#558B6E";
            case ("Fat Tires"): return "#0EB1D2";
            case ("Packed"): return "#0EB1D2";
            case ("Wet"): return "#6F1D1B";
            case ("Closed"): return "#6F1D1B";
            default: return "#6F1D1B";
        }
    }

    render(props) {
        return (
            <div className="condition-div">
                <div className="condition-square" style={{ backgroundColor: this.determineConditionSquareColor(this.props.trailCondition) }}></div>
                <p className="condition-heading"><b>{this.props.trailCondition}</b></p>
                <h6 className="last-updated-heading">Last Updated: <i>{this.props.trailTimestamp}</i></h6>
            </div>
        );
    }
}

class BullitenPost extends React.Component {
    render(props) {
        return (
            <div className="post-content">
                <div className="post-timestamp">
                    <p>
                        <i>{this.props.postTimestamp}</i>
                    </p>
                </div>
                <div className="post-author-and-mesesage">
                    <p>
                        <b>{this.props.postAuthor}</b>  {this.props.postMessage}
                    </p>
                </div>
            </div>
        );
    }
}

class BullitenPostForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputMessage: ""
        };
        this.inputChangeHandler = this.inputChangeHandler.bind(this);
        this.formSubmitHandler = this.formSubmitHandler.bind(this);
    }

    inputChangeHandler(event) {
        this.setState({inputMessage: event.target.value})
    }

    formSubmitHandler(event) {
        event.preventDefault();
        alert("You are submitting: " + this.state.inputMessage);
    }

    render(props) {
        return (
            <form className="bulliten-post-form" onSubmit={this.formSubmitHandler}>
                <input className="bulliten-post-input" onChange={this.inputChangeHandler} placeholder="Type here..." type="text"></input>
                <input className="bulliten-post-button" type="submit"></input>
            </form>
        );
    }
}

class TrailBullitenBoard extends React.Component {
    render(props) {
        return (
            <div className="trail-bulliten-board" onClick={(event) => event.stopPropagation()}>
                <p className="adimin-post">
                    <div className="post-admin-box"><b>{this.props.trailAuthor}</b></div>  {this.props.trailComments}
                </p>
                <div className="trail-bulliten-messages">
                    <BullitenPost postAuthor="Jimmy" postMessage="super radical today. I could't believe how many people went out today for the great trails." postTimestamp="Today 12:00pm" />
                    <BullitenPost postAuthor="Danny" postMessage="Great weather today for a ride." postTimestamp="Today 12:02pm" />
                    <BullitenPost postAuthor="Bill" postMessage="Would recommend getting out there now! Couple trouble spots on this route but not too bad." postTimestamp="Today 1:05pm" />
                </div>
                <BullitenPostForm />
            </div>
        );
    }
}

class TrailOtherInfo extends React.Component {
    // componentDidMount() {
    //     var style = "https://googledrive.com/host/1qxc4_kGJ66yZFrTrB-VYt5KnAGrNc63U/widget.css"
    //     var script = document.createElement("script");
    //     script.setAttribute("src", "https://es.pinkbike.org/ttl-86400/sprt/j/trailforks/widget.js");
    //     document.getElementsByTagName("head")[0].appendChild(script);
    // }

    render(props) {
        return (
            <div className="other-info">
                <TrailBullitenBoard trailAuthor={this.props.trailAuthor} trailComments={this.props.trailComments} />
                {/* <div className="TrailforksRegionInfo" data-w="477px" data-h="150px" data-rid={this.props.trailRid} data-counts="1" data-stats="0" data-title="0"></div> */}
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
                <TrailTitle trailName={this.props.name} trailLocation={this.props.location} trailRid={this.props.trailforksMapId} changeMapHandler={this.props.changeMapEvent} />
                <TrailCondition trailCondition={this.props.condition} trailTimestamp={this.props.parsedTimestamp} />
                <TrailOtherInfo trailComments={this.props.comments} trailAuthor={this.props.username} trailRid={this.props.trailforksMapId} />
                {/* <TrailWeatherOutlook /> */}
            </div>
        );
    }
}

export default TrailTile;