import React from 'react';
import axios from 'axios';
import {createFancyTimestamp} from '../../utils';

class BullitenPostForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputMessage: "",
            inputErrors: "",
            trailId: this.props.trailId
        };
        this.handleValidation = this.handleValidation.bind(this);
        this.inputChangeHandler = this.inputChangeHandler.bind(this);
        this.formSubmitHandler = this.formSubmitHandler.bind(this);
    }

    handleValidation() {
        var formIsValid = true;
        if(!this.state.inputMessage){
            formIsValid = false;
            this.setState({inputErrors: "Cannot be empty"});
         }
         return formIsValid;
    }

    inputChangeHandler(event) {
        this.setState({inputMessage: event.target.value})
    }

    formSubmitHandler(event) {
        event.preventDefault();

        if(this.handleValidation()) {
            //bullitenPostRequest[username, timestamp, postMessage]
            var bullitenPostRequest = [
                "user1",
                createFancyTimestamp(),
                this.state.inputMessage
            ];
            
            axios.post('http://localhost:4000/postBulletinMessage/' + this.state.trailId, bullitenPostRequest);
            this.setState({inputMessage: ""});
            this.props.updateClientBulletinBoard(bullitenPostRequest);
        }
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