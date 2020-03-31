import React, { Component } from 'react';
import './IssueDetail.css';

class IssueDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            issueDetails: []
        };
    }

    async componentDidMount() {
        const { issue_number } = this.props.match.params
        try {
            const response = await fetch (`https://api.github.com/repos/facebook/create-react-app/issues/${issue_number}`);
            const data = response.json();
            this.setState({
                issueDetails: await data
            })
            
            // Dev Test
            // console.log(data);

        } catch(error) {
            console.log(error);
        }
    }


    render() { 
        const { issueDetails } = this.state;
        
        // Dev test
        // console.log(this.props);
        // console.log(issueDetails);

        return (  

            <div className="IssueDetail">
                <p>{ issueDetails.body }</p>
            </div>

        );
    }
}
 
export default IssueDetail;
