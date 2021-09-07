import React, {Component} from "react";
import './post-add-form.css';

export default class PostAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subject: '',
            note: ''
        }
        this.onValueChangeSub = this.onValueChangeSub.bind(this);
        this.onValueChangeNote = this.onValueChangeNote.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }

    // show text
    onValueChangeSub(event) {
        this.setState({
            subject: event.target.value,
        })
    }

    onValueChangeNote(event) {
        this.setState({
            note: event.target.value
        })
    }

    onSubmit(event) {
        event.preventDefault()
        this.props.onAdd(this.state.subject);
        this.props.onAdd(this.state.note);
        // clear our input
        this.setState({
            subject: '',
            note: ''
        })
    }

    render() {
        return(
            <form
                className='create-form'
                onSubmit={this.onSubmit}>
                <button
                    type="submit"
                    className="btn btn-light add-post-btn">create new post</button>
                <div className='padding-note'>
                    <input
                        className='subject'
                        placeholder='Subject'
                        type="text"
                        name="subject"
                        onChange={this.onValueChangeSub}
                        value={this.state.subject}/><br/>
                    <textarea
                        className='note'
                        placeholder='Note'
                        name="note"
                        onChange={this.onValueChangeNote}
                        value={this.state.note}/>
                </div>
            </form>
        )
    }


}
