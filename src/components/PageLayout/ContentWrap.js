import React from 'react';
import TrailTileListContainer from './TrailTileListContainer';
import ReiMtbProjectMap from './ReiMtbProjectMap';

class ContentWrap extends React.Component {
    render(props) {
        return (
            <div id="content-wrap">
                <TrailTileListContainer />
                <ReiMtbProjectMap />
            </div>
        )
    }
}

export default ContentWrap;