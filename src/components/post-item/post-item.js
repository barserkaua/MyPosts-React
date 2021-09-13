import React from "react";
import PostDetails from "../post-details";

import './post-item.css';


const PostItem = ({post, postId}) => {

    const elements = post.map((item) => {
        if (item.id === postId) {
            return (
                <ul key={item.id}>
                    <div>
                        <PostDetails
                            subject={item.subject}
                            note={item.note}
                            date={item.date}
                            id={item.id}/>
                    </div>
                </ul>
            )
        } else {
            return;
        }
    });
    return (
        <div>
            {elements}
        </div>
    );
}

export default PostItem;