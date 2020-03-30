import React, { Component } from 'react';
import './IssueList.css';
import Issue from './Issue';

class IssueList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            issues: [],
            title:'',
            url:'',
            body:''
        };
    }

    async componentDidMount() {
        try {
            const response = await fetch (`https://api.github.com/repos/facebook/create-react-app/issues`);
            const data = response.json();
            this.setState({
                issues: data
            })
            // Dev Test
            console.log(data);
        } catch(error) {
            console.log(error);
        }
    }

    render() { 
        const { issues } = this.state;
        const { title } = this.state;
        const { url } = this.state;
        const { body } = this.state;
    
        return (
            <div className="IssueList">
                <ul>
                    {issues.map(issue => (
                        <Issue title= {issue.title} url= {issue.url} body= {issue.body}/>
                    ))}
                </ul>
                
            </div>
          );
    }
}
 
export default IssueList;