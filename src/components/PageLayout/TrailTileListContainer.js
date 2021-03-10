import React from 'react';
import TrailTileList from './TrailTileList';

class TrailTileListContainer extends React.Component{
    render(props) {
        return (
            <div id="sidebar" style={{
                maxWidth: this.props.showMap ? "565px" : "100vw",
                marginLeft: this.props.showMap ? "" : "auto"
            }}>
                <TrailTileList windowWidth={this.props.windowWidth} windowHeight={this.props.windowHeight} />
            </div>
        )
    };
}

export default TrailTileListContainer;