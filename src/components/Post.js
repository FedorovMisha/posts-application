import React from 'react';
import './Post.css';

const Post = (props) => {
    return (
        <div className="post-container">
            <div>
                <h3>{props.label}</h3>
                <p>{props.contentBody}</p>
            </div>
            <img src={props.imageUrl} className="post-image" alt=""/>
        </div>
    )
}

export default Post;