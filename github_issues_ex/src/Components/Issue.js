import React, { Component } from 'react';
import './Issue.css';
import IssueList from './IssueList';

const Issue = ({ issue }) => {
    return (  
        <div className="Issues">
            <h1>{issue}</h1>
            <h1>{issue.title}</h1>
            <h1>{issue.url}</h1>
            <h1>{issue.body}</h1>
        </div>
    );
};
 
export default Issue;