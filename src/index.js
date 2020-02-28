import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import * as serviceWorker from './serviceWorker';
import TrailTile from './trail-tile.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import trail_data from './trail_data.json';

const TrailTileList = (props) => (
	<div>
  	{props.trails.map(trail => <TrailTile {...trail}/>)}
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
                <TrailTileList trails={this.props.trailList} />
            </div>
        )
    };
}

class TrailMapContainer extends React.Component{
    render(props) {
        return (
            <div id="content">
                <iframe title="map" id="masterMap" style={{width:'100%', maxWidth:'100vw', maxHeight:'100vh', 
                height:'100%'}} frameBorder="0" scrolling="no" src={this.props.mapSrc}></iframe>
            </div>
        )
    }
}

class TrailMapContainerTrailForks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {height: 0, width: 0, currentMapId: "3438"};
    }
    componentDidMount() {
        var script = document.createElement("script");
        script.setAttribute("src", "https://es.pinkbike.org/ttl-86400/sprt/j/trailforks/widget.js");
        script.setAttribute("zoom", "-1");
        document.getElementsByTagName("head")[0].appendChild(script);
        var widgetCheck = false;
        const height = document.getElementById('content-wrap').clientHeight;
        const width =document.getElementById('content').clientWidth;
        this.setState({ height: height, width: width });
    };
    
    render(props) {
        return (
            <div id="content">
                <div class="TrailforksWidgetMap" data-w={this.state.width + "px"} 
                data-h={this.state.height + "px"} data-rid={this.state.currentMapId} 
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
    state = {
        trails: trail_data,
        currentMapId: this.props.mapId
    };
    changeCurrentMapId = (mapId) => {
        this.setState({currentMapId: mapId});
    }

    render() {
        return(
            <div id="page-container">
                <div id="content-wrap">
                    <PageHeader />
                    <TrailTileListContainer trailList={this.state.trails}/>
                    <TrailMapContainerTrailForks mapId={this.state.currentMapId}/>
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
