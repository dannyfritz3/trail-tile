import React from 'react';
import BullitenPostForm from './BullitenPostForm';
import BullitenPost from './BullitenPost';

class TrailBullitenBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
        this.updateClientBulletinBoard = this.updateClientBulletinBoard.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({posts: nextProps.bulletinPosts})
    }

    updateClientBulletinBoard(clientPost) {
        var clientPostComponent = <BullitenPost postAuthor={clientPost[0]} postMessage={clientPost[2]} postTimestamp={clientPost[1]} />;
        var updatedArray = this.state.posts.concat(clientPostComponent);
        this.setState({posts: updatedArray});
    }

    render(props) {
        return (
            <div className="trail-bulliten-board" onClick={(event) => event.stopPropagation()}>
                <div className="adimin-post">
                    <div className="post-admin-author"><b>{this.props.trailAuthor}</b></div>
                    <div className="post-admin-text">{this.props.trailComments}</div>
                </div>
                <div className="trail-bulliten-messages">
                    {this.state.posts}
                </div>
                <BullitenPostForm trailId={this.props.trailId} updateClientBulletinBoard={this.updateClientBulletinBoard} />
            </div>
        );
    }
}

export default TrailBullitenBoard;