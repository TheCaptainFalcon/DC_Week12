import React from 'react';
import './Issue.css';

function Issue(props) {
    let { title, url, body } = props;
    return (  
        <div className="Issues">
            <p>{title}</p>
            <a href={url}>{url}</a>
            <p>{body}</p>
        </div>
    );
};
 
export default Issue;