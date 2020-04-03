import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './IssueList.css';


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
            // console.log(data);

        } catch(error) {
            console.log(error);
        }
    }

    render() { 
        const { issues } = this.state;
        
        // dev test
        // console.log(issues);
        return (
            <div className="IssueList">
                <div>
                    {issues.map(issue => (
                        
                    <li className='IssueList-key' key={issue.id}>
                        {issue.title}
                        <p><Link to={`/issue/${issue.number}`}>More Details</Link></p>
                    </li>
                    
                    ))}
                </div>
            </div>
        );
     }
}
 
export default IssueList;