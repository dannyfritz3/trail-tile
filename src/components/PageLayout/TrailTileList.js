import React from 'react';
import TrailTile from '../TrailTile/TrailTile';

export const TrailTileList = (props) => (
	<div>
  	    {props.trails.map(trail => <TrailTile key={trail.key} changeMapEvent={props.changeMapEvent} {...trail}/>)}
	</div>
);