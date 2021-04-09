import React from 'react';
import axios from 'axios';
import {createFancyTimestamp} from '../../../utils';

class BullitenPostForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputMessage: "",
            inputErrors: "",
            trailId: this.props.trailId
        };
    }

    render(props) {
        const handleValidation = () => {
            var formIsValid = true;
            if(!this.state.inputMessage){
                formIsValid = false;
                this.setState({inputErrors: "Cannot be empty"});
             }
             return formIsValid;
        };
    
        const inputChangeHandler = (event) => {
            this.setState({inputMessage: event.target.value})
        };
    
        const formSubmitHandler = async (event) => {
            event.preventDefault();
    
            if(handleValidation()) {
                //bullitenPostRequest[username, timestamp, postMessage]
                var bullitenPostRequest = [
                    "user1",
                    createFancyTimestamp(),
                    this.state.inputMessage
                ];
                
                await axios.post("https://7jc3ap7jwf.execute-api.us-east-2.amazonaws.com/dev/bulletinboard?trailId=" + this.state.trailId, JSON.stringify(bullitenPostRequest));
                this.setState({inputMessage: ""});
                this.props.updateClientBulletinBoard(bullitenPostRequest);
            }
        };

        return (
            <form className="bulliten-post-form" onSubmit={formSubmitHandler}>
                <input className="bulliten-post-input" onChange={inputChangeHandler} value={this.state.inputMessage} placeholder="Type here..." type="text"></input>
                <input className="bulliten-post-button" type="submit"></input>
            </form>
        );
    }
}

export default BullitenPostForm;