import React from 'react';

class BullitenPost extends React.Component {
    render(props) {
        return (
            <div className="post-content">
                <div className="post-timestamp">
                    <p>
                        <i>{this.props.postTimestamp}</i>
                    </p>
                </div>
                <div className="post-author-and-mesesage">
                    <p>
                        <b>{this.props.postAuthor}</b>  {this.props.postMessage}
                    </p>
                </div>
            </div>
        );
    }
}

export default BullitenPost;