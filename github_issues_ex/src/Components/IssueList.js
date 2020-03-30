import React, { Component } from 'react';
import './IssueList.css';
import Issue from './Issue';

class IssueList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            issues: []
        };
    }

    async componentDidMount() {
        try {
            const response = await fetch (`https://api.github.com/repos/facebook/create-react-app/issues`);
            const data = response.json();
            this.setState({
                issues: await data
            })
            
            // Dev Test
            console.log(data);

        } catch(error) {
            console.log(error);
        }
    }

    render() { 
        let issuePopulate;
        issuePopulate = this.state.issues.map((issue) => {
            return <Issue 
            title={issue.title} 
            url={issue.url}
            body={issue.body} 
            />
        })
    
        return (
            <div className="IssueList">
                <container>
                    {issuePopulate}
                </container>
            </div>
        );
     }
}
 
export default IssueList;