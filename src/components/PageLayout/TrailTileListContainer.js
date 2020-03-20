import React from 'react';
import TrailTile from '../TrailTile/TrailTile';

const TrailTileList = (props) => (
	<div>
  	{props.trails.map(trail => <TrailTile changeMapEvent={props.changeMapEvent} {...trail}/>)}
	</div>
);

class TrailTileListContainer extends React.Component{
    render(props) {
        return (
            <div id="sidebar">
                <TrailTileList trails={this.props.trailList} changeMapEvent={this.props.changeMapEvent}/>
            </div>
        )
    };
}

export default TrailTileListContainer;