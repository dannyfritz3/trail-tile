import React from 'react';
import {TrailTileList} from './TrailTileList';
import axios from 'axios';

class TrailTileListContainer extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            trails: []
        }
    }

    componentWillMount() {
        axios.get('https://api.morcmtb.org/v1/trails').then((response) => {
            debugger;
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            };
            this.setState({trails: response.data});
        });
    }

    render(props) {
        const changeMapEvent = (event, reimtbX, reimtbY) => {
            event.stopPropagation();
            var contentHeight = document.getElementById('content-wrap').clientHeight;
            var mapSrc = "https://www.mtbproject.com/widget/map?favs=0&location=fixed"+ 
            "&x=" + reimtbX +
            "&y=" + reimtbY +
            "&z=12.2" +
            "&h=" + contentHeight;
    
            document.getElementById("map").src = mapSrc;
        };
        return (
            <div id="sidebar" style={{
                maxWidth: this.props.showMap ? "565px" : "100vw",
                marginLeft: this.props.showMap ? "" : "auto"
            }}>
                <TrailTileList windowWidth={this.props.windowWidth} windowHeight={this.props.windowHeight} trails={this.state.trails} changeMapEvent={changeMapEvent}/>
            </div>
        )
    };
}

export default TrailTileListContainer;