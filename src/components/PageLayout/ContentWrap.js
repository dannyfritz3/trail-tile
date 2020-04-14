import React from 'react';
import TrailTileListContainer from './TrailTileListContainer';
import ReiMtbProjectMap from './ReiMtbProjectMap';

class ContentWrap extends React.Component {
    render(props) {
        return (
            <div id="content-wrap">
                <TrailTileListContainer showMap={this.props.showMap} />
                <ReiMtbProjectMap showMap={this.props.showMap} />
            </div>
        )
    }
}

export default ContentWrap;