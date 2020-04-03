import React, { Component } from "react";
import './Comment.css';

class Comment extends Component {
  state = {
    comment: []
  };

  async componentDidMount() {
    const postId = this.props.match.params.post_id;
    const commentUrl = `http://localhost:3000/post/comment/${postId}`;
    
    const comment = await this.loadData(commentUrl);
    
    this.setState({
      comment
    });
  }

  loadData = async (url) => {
    const response = await fetch(url);
    const data = response.json();
    return data;
  };

  render() {
    
    const { comment } = this.state;

    // dev test
    console.log(this.props);
    console.log(this.props.match)

    return (
      <div className="Comment">
        {comment.map(com => (
          <ul>
            <li key={`post${com.id}`}>{com.content}
            </li>
          </ul> 
        ))}
      </div>  
    );
  }
}

export default Comment;
