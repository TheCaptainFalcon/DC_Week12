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
            console.log(data);

        } catch(error) {
            console.log(error);
        }
    }

    render() { 
        const { issues } = this.state;
        return (
            <div className="IssueList">
                <container>
                    {issues.map(issue => (
                        
                    <div>
                        <h3>{issue.title}</h3>
                        <p><Link to={`/issue/${issue.number}`}>More Details</Link></p>
                    </div>
                    
                    ))}
                </container>
            </div>
        );
     }
}
 
export default IssueList;