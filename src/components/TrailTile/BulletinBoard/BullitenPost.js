import React from 'react';

class BullitenPost extends React.Component {
    render(props) {
        return (
            <div className="post-content">
                <div className="post-details">
                    <div className="post-author">
                        {this.props.postAuthor}
                    </div>
                    <div className="post-timestamp">
                        {this.props.postTimestamp[0]}
                        <br/>
                        @ <i>{this.props.postTimestamp[1]}</i>
                    </div>
                </div>
                <div className="post-message">
                    {this.props.postMessage}
                </div>
            </div>
        );
    }
}

export default BullitenPost;