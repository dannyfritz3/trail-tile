import React from 'react';
import TrailTile from '../TrailTile/TrailTile';

export const TrailTileList = (props) => (
	<div>
		{props.trails.map(trail =>
			<TrailTile windowWidth={props.windowWidth} windowHeight={props.windowHeight} key={trail.key} changeMapEvent={props.changeMapEvent} {...trail} />
		)}
	</div>
);