import React from 'react';

class ReiMtbProjectMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            myStyle: {
                height: 0,
                width: 0,
                maxWidth: 0
            }
        };
    }
    componentDidMount() {
        const height = document.getElementById('content-wrap').clientHeight;
        const width = document.getElementById('content').clientWidth;
        this.setState({ myStyle: {width: '100%', maxWidth: width, height: '100%', maxHeight: height} });
    }
    
    render() {
        return (
            <div id="content">
                <iframe id="map" title="mtb-project-iframe" style={this.state.myStyle}
                    frameBorder="0" scrolling="no"
                    src={"https://www.mtbproject.com/widget/map?favs=0&location=fixed&x=-10532963&y=5821316&z=5.7&h=" + this.state.myStyle.maxHeight}>
                </iframe>
            </div>
        )
    }
}

export default ReiMtbProjectMap;