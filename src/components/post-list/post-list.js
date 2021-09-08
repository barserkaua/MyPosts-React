import React from "react";
import PostListItem from "../post-list-item";
import './post-list.css';

const PostList = ({posts}) => {

    const elements = posts.map((item) => {
       return (
           <ul className='list-group list-group-horizontal'>
               <li>
                   <PostListItem
                       subject={item.subject}
                       note={item.note}
                       date={item.date}/>
               </li>
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