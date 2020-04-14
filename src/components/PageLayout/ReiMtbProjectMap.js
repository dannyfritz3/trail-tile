import React from 'react';
import ReactDOM from 'react-dom';

class ReiMtbProjectMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            myStyle: {
                height: 0,
                maxHeight: 0,
                width: 0,
                maxWidth: 0
            }
        };
    }
    componentDidMount() {
        const height = document.getElementById('content-wrap').clientHeight;
        const width = document.getElementById('map-container').clientWidth;
        this.setState({ myStyle: {width: '100%', maxWidth: width, height: '100%', maxHeight: height} });
        ReactDOM.render(<ReiMtbProjectMap />, document.getElementById("content"));
    }
    
    render() {
        return (
            <div id="content" style={{
                // width: this.props.showMap ? "100%" : "0%"
            }}>
                <div id="map-container">
                    <iframe title="map" id="map" style={this.state.myStyle} frameBorder="0" scrolling="no" 
                        src={"https://www.mtbproject.com/widget/map?favs=0&location=fixed&x=-10532963&y=5821316&z=4.5&h=" + this.state.myStyle.maxHeight}>
                    </iframe>
                </div>
            </div>
        )
    }
}

export default ReiMtbProjectMap;