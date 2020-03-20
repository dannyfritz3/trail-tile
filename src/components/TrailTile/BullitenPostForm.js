import React from 'react';

class BullitenPostForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputMessage: ""
        };
        this.inputChangeHandler = this.inputChangeHandler.bind(this);
        this.formSubmitHandler = this.formSubmitHandler.bind(this);
    }

    inputChangeHandler(event) {
        this.setState({inputMessage: event.target.value})
    }

    formSubmitHandler(event) {
        event.preventDefault();
        alert("You are submitting: " + this.state.inputMessage);
    }

    render(props) {
        return (
            <form className="bulliten-post-form" onSubmit={this.formSubmitHandler}>
                <input className="bulliten-post-input" onChange={this.inputChangeHandler} placeholder="Type here..." type="text"></input>
                <input className="bulliten-post-button" type="submit"></input>
            </form>
        );
    }
}

export default BullitenPostForm;