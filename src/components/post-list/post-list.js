import React from "react";
import PostListItem from "../post-list-item";
import './post-list.css';

const PostList = ({posts}) => {

    const elements = posts.map((item) => {
       return (
           <ul className='inline-block'>
                <div>
                    <PostListItem
                        subject={item.subject}
                        note={item.note}
                        date={item.date}/>
                </div>
           </ul>
       )
    });

    return (
        <div>
            {elements}
        </div>
    );
}

export default PostList;