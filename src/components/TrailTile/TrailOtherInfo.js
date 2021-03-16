import React from 'react';
import TrailBullitenBoard from './BulletinBoard/TrailBullitenBoard';

class TrailOtherInfo extends React.Component {
    render(props) {
        return (
            <div className="other-info">
                <TrailBullitenBoard trailAuthor={this.props.trailAuthor} trailComments={this.props.trailComments} updatedAt={this.props.updatedAt} trailId={this.props.trailId} bulletinPosts={this.props.bulletinPosts} />
            </div>
        )
    }
}

export default TrailOtherInfo;