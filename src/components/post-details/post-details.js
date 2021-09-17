import React, {Component} from "react";
import './post-details.css'

export default class PostDetails extends Component {
    textInput = React.createRef();

    state = {
        isInEditMode: false,
        text: 'Edit note',
        note: this.props.note
    }

    copyLink = () => {
        const el = document.createElement('input');
        el.value = window.location.href;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
    }

    // function to replace tag div to textarea
    changeEditMode = () => {
        this.setState({
            isInEditMode: !this.state.isInEditMode,
            text: 'Save note'
        });
    }

    // function to upload new text and switch tag to div
    updateComponentNote = () => {
        this.setState({
            isInEditMode: false,
            text: 'Edit note',
            note: this.textInput.current.value
        })
    }

    // function to change note text
    editNoteText = () => {
        return this.state.isInEditMode ?
            <textarea
                className="post-note-info"
                defaultValue={this.state.note}
                ref={this.textInput}
            >
            </textarea> :
            <div className="post-note-info">
                {this.state.note}
            </div>
    }

    render() {
        const {subject, date} = this.props;
        const {text, note} = this.state;

        return (
            <div>
                <div className='post-window'>
                    <div className='post-subject-info'>
                        {subject}
                    </div>
                    <div className='container-note'>
                        {this.editNoteText()}
                        <div className="post-functional-btn">
                            <button
                                onClick={() => {return this.state.isInEditMode ? this.updateComponentNote() :  this.changeEditMode()}}
                                className='btn btn-outline-secondary'>
                                {text}
                            </button>
                            <button
                                onClick={() => navigator.clipboard.writeText(note)}
                                className='btn btn-outline-secondary'>
                                    Copy to clipboard
                            </button>
                            <button onClick={this.copyLink} className='btn btn-outline-secondary'>
                                Share
                            </button>
                        </div>
                    </div>
                    <div className="post-date-info">
                        {date}
                    </div>
                </div>

            </div>
        )
    }
}