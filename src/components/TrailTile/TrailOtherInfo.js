import React from 'react';
import TrailBullitenBoard from './TrailBullitenBoard';

class TrailOtherInfo extends React.Component {
    // componentDidMount() {
    //     var style = "https://googledrive.com/host/1qxc4_kGJ66yZFrTrB-VYt5KnAGrNc63U/widget.css"
    //     var script = document.createElement("script");
    //     script.setAttribute("src", "https://es.pinkbike.org/ttl-86400/sprt/j/trailforks/widget.js");
    //     document.getElementsByTagName("head")[0].appendChild(script);
    // }

    render(props) {
        return (
            <div className="other-info">
                <TrailBullitenBoard trailAuthor={this.props.trailAuthor} trailComments={this.props.trailComments} trailId={this.props.trailId} bulletinPosts={this.props.bulletinPosts} />
                {/* <div className="TrailforksRegionInfo" data-w="477px" data-h="150px" data-rid={this.props.trailRid} data-counts="1" data-stats="0" data-title="0"></div> */}
            </div>
        )
    }
}

export default TrailOtherInfo;