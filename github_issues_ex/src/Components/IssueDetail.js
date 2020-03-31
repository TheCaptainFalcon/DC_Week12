import React, { Component } from 'react';
import './IssueDetail.css';

class IssueDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const { issue_number } = this.props.match.params
        console.log(this.props);
        return (  
            <div>
                <p>{ issue_number }</p>
            </div>

        );
    }
}
 
export default IssueDetail;
