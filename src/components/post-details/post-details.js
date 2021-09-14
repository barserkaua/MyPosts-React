import React, {Component} from "react";
import './post-details.css'

export default class PostDetails extends Component {

    copy = () => {
        const el = document.createElement('input');
        el.value = window.location.href;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
    }

    render() {
        const {subject, note, date} = this.props;
        return (
            <div>
                <div className='post-window'>
                    <div className='post-subject-info'>
                        {subject}
                    </div>
                    <div className='container-note'>
                        <div className="post-note-info">
                            {note}
                        </div>
                        <div className="post-functional-btn">
                            <button className='btn btn-outline-secondary'>
                                Edit note
                            </button>
                            <button className='btn btn-outline-secondary'>
                                Copy to clipboard
                            </button>
                            <button onClick={this.copy} className='btn btn-outline-secondary'>
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