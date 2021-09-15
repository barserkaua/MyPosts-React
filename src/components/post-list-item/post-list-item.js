import React, {Component} from "react";
import {Link} from 'react-router-dom';

import './post-list-item.css';

export default class PostListItem extends Component {

    copy = () => {
        const el = document.createElement('input');
        el.value = window.location.href;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
    }

    handleChangeNoteInput = (event) => {
        const note = event.slice(0, 200);
        if (note.length >= 200) {
            return `${note}...`;
        } else {
            return event;
        }
    }

    render() {
        const {subject, note, date, id} = this.props;
        return (
            <div className="d-inline p-2">
                <div className='posts-output'>
                    <div className='posts-output-subject'>
                        <Link to={`/${id}`}  className='post-info'>
                            {subject}
                        </Link>
                    </div>
                    <p className='posts-output-note'>
                        {this.handleChangeNoteInput(note)}
                    </p>
                    <div className='posts-output-data'>
                        {date}
                    </div>
                    <div className='posts-output-media'>
                        <a href="https://www.instagram.com/check__mate___/" target='_blank' className="fa fa-instagram"></a>
                        <a href="https://www.facebook.com/barserka/" target='_blank' className="fa fa-facebook"></a>
                        <button onClick={this.copy} className="fa fa-share-square"></button>
                    </div>
                </div>
            </div>
        )
    }
}