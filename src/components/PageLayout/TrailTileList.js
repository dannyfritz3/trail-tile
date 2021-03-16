import React from 'react';
import TrailTile from '../TrailTile/TrailTile';
const axios = require('axios');

class TrailTileList extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			trails: []
		}
	}

	componentWillMount() {
        axios.get('https://api.morcmtb.org/v1/trails').then((response) => {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            };
            this.setState({trails: response.data});
        });
    }

	render(props){
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
			<div>
				{this.state.trails.map( (trail) =>
					<TrailTile key={new Date()} windowWidth={this.props.windowWidth} windowHeight={this.props.windowHeight} changeMapEvent={changeMapEvent} trail={trail} />
				)}
			</div>
		);
	}
}

export default TrailTileList;