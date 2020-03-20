import React from 'react';

class ReiMtbProjectMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reimtbX: this.props.reimtbX,
            reimtbY: this.props.reimtbY,
            reimtbZ: this.props.reimtbZ,
            myStyle: {
                height: 0,
                width: 0,
                maxWidth: 0
            }
        };
    }
    componentDidMount() {
        const height = document.getElementById('content-wrap').clientHeight;
        const width = document.getElementById('map-container').clientWidth;
        this.setState({ myStyle: {width: '100%', maxWidth: width, height: '100%', maxHeight: height} });
    }
    
    render() {
        return (
            <div id="content">
                <div id="map-container">
                    <iframe id="map" title="mtb-project-iframe" style={this.state.myStyle}
                        frameBorder="0" scrolling="no"
                        src={"https://www.mtbproject.com/widget/map?favs=0&location=fixed"+
                        "&x=" + this.state.reimtbX +
                        "&y=" + this.state.reimtbY +
                        "&z=" + this.state.reimtbZ +
                        "&h=" + this.state.myStyle.maxHeight}>
                    </iframe>
                </div>
            </div>
        )
    }
}

export default ReiMtbProjectMap;