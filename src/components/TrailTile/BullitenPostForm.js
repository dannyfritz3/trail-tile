import React from 'react';
import axios from 'axios';

class BullitenPostForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputMessage: "",
            trailId: this.props.trailId
        };
        this.inputChangeHandler = this.inputChangeHandler.bind(this);
        this.formSubmitHandler = this.formSubmitHandler.bind(this);
    }

    inputChangeHandler(event) {
        this.setState({inputMessage: event.target.value})
    }

    formSubmitHandler(event) {
        event.preventDefault();

        //bullitenPostRequest[username, timestamp, postMessage]
        var bullitenPostRequest = [
            "user1",
            new Date().toString(),
            this.state.inputMessage
        ];
        axios.post('http://localhost:4000/postBulletinMessage/' + this.state.trailId, bullitenPostRequest);
        this.setState({inputMessage: ""});
        this.props.updateClientBulletinBoard(bullitenPostRequest);
    }

    render(props) {
        return (
            <form className="bulliten-post-form" onSubmit={this.formSubmitHandler}>
                <input className="bulliten-post-input" onChange={this.inputChangeHandler} value={this.state.inputMessage} placeholder="Type here..." type="text"></input>
                <input className="bulliten-post-button" type="submit"></input>
            </form>
        );
    }
}

export default BullitenPostForm;