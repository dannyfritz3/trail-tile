import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import * as serviceWorker from './serviceWorker';
import TrailTile from './trail-tile.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import trail_data from './trail_data.json';

const TrailTileList = (props) => (
	<div>
  	{props.trails.map(trail => <TrailTile changeMapEvent={props.changeMapEvent} {...trail}/>)}
	</div>
);

class PageHeader extends React.Component{
    render(props) {
        return (
            <div id="header">
                <ul className="nav-tabs">
                    <p id="logo">Minnesota Off-Road Cyclists</p>
                    <NavTab navTabTitle="About" linkRef="#about"/>
                    <NavTab navTabTitle="Community" linkRef="#community"/>
                    <NavTab navTabTitle="Events" linkRef="#events"/>
                </ul>
            </div>
        )
    };
}

class TrailTileListContainer extends React.Component{
    render(props) {
        return (
            <div id="sidebar">
                <TrailTileList trails={this.props.trailList} changeMapEvent={this.props.changeMapEvent}/>
            </div>
        )
    };
}

class ReiMtbProjectMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            myStyle: {
                height: 0,
                width: 0,
                maxWidth: 0,}
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
                    frameborder="0" scrolling="no"
                    src={"https://www.mtbproject.com/widget/map?favs=0&location=fixed&x=-11676671&y=4822700&z=8.5&h=" + this.state.myStyle.maxHeight}>
                </iframe>
            </div>
        )
    }
}

class TrailMapContainerTrailForks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {height: 0, width: 0};
    }
    componentDidMount() {
        var script = document.createElement("script");
        script.setAttribute("src", "https://es.pinkbike.org/ttl-86400/sprt/j/trailforks/widget.js");
        document.getElementsByTagName("head")[0].appendChild(script);
        const height = document.getElementById('content-wrap').clientHeight;
        const width =document.getElementById('content').clientWidth;
        this.setState({ height: height, width: width });
    }
    render(props) {
        return (
            <div id="content">
                <div id="TrailforksWidgetMap" className="TrailforksWidgetMap" data-w={this.state.width + "px"} 
                data-h={this.state.height + "px"} data-rid={this.props.mapId} 
                data-activitytype="1" data-maptype="trailforks" data-trailstyle="difficulty" data-controls="0" 
                data-list="0" data-dml="1" data-layers="labels,poi,polygon,directory,region" data-z="" data-lat="" 
                data-lon="" data-hideunsanctioned="0"></div>
            </div>
        );
    }
}

class NavTab extends React.Component{
    render(props) {
        return (
        <li className="nav-tab active-left" style={{float:'right'}}><a className="nav-tab-link" 
        href={this.props.linkRef}>{this.props.navTabTitle}</a></li>
        )
    };
}

class App extends React.Component{
    constructor(props){
        super(props);
        this.changeMapEvent = this.changeMapEvent.bind(this);
    }
    state = {
        trails: trail_data,
        currentMapId: "3438"
    };
    changeMapEvent (event, rid) {
        event.stopPropagation();
        this.setState({currentMapId: rid});
    }
    render() {
        return(
            <div id="page-container">
                <div id="content-wrap">
                    <PageHeader />
                    <TrailTileListContainer trailList={this.state.trails} changeMapEvent={this.changeMapEvent}/>
                    {/* <TrailMapContainerTrailForks mapId={this.state.currentMapId}/> */}
                    <ReiMtbProjectMap mapId={this.state.currentMapId}/>
                </div>
                {/* <TrailMapContainer mapSrc="https://www.mtbproject.com/widget/map?favs=0&location=fixed&x=-10478086&y=5827237&z=5.5&h=1000"/> */}
            </div>
        );
    }
}

export default TrailMapContainerTrailForks;
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
