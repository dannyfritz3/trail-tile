import React from 'react';
import TrailTileListContainer from './TrailTileListContainer';
import ReiMtbProjectMap from './ReiMtbProjectMap';

class ContentWrap extends React.Component {
    render(props) {
        return (
            <div id="content-wrap">
                <TrailTileListContainer windowWidth={this.props.windowWidth} windowHeight={this.props.windowHeight} showMap={this.props.showMap} />
                <ReiMtbProjectMap showMap={this.props.showMap} />
            </div>
        )
    }
}

export default ContentWrap;