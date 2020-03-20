import React from 'react';
import BullitenPost from './BullitenPost';
import BullitenPostForm from './BullitenPostForm';

class TrailBullitenBoard extends React.Component {
    render(props) {
        return (
            <div className="trail-bulliten-board" onClick={(event) => event.stopPropagation()}>
                <div className="adimin-post">
                    <div className="post-admin-box"><b>{this.props.trailAuthor}</b></div>  {this.props.trailComments}
                </div>
                <div className="trail-bulliten-messages">
                    <BullitenPost postAuthor="Jimmy" postMessage="super radical today. I could't believe how many people went out today for the great trails." postTimestamp="Today 12:00pm" />
                    <BullitenPost postAuthor="Danny" postMessage="Great weather today for a ride." postTimestamp="Today 12:02pm" />
                    <BullitenPost postAuthor="Bill" postMessage="Would recommend getting out there now! Couple trouble spots on this route but not too bad." postTimestamp="Today 1:05pm" />
                </div>
                <BullitenPostForm />
            </div>
        );
    }
}

export default TrailBullitenBoard;