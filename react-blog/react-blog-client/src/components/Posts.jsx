import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Posts.css';

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            urlData: []
        };
    }

    async componentDidMount() {
        try {
            const response = await fetch (`localhost:3000`);
            const data = await response.json();
            this.setState({
                urlData : data
            })
            
            // dev Test
            console.log(data);

        } catch(error) {
            console.log(error);
        }
    }


    render() { 
        const { urlData } = this.state;
        return (  

            <div className="Posts">
                <h2>post</h2>
                <ul>
                {urlData.map(post => {
                    return (
                    <li key={`posts-${post.id}`}>
                        <Link to={`/`}>a link</Link>
                        <p>{post}</p>
                    </li>
                    );
                })}
                </ul>
            </div>

        );
    }
}
 
export default Posts;
