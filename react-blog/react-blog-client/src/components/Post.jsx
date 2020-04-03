import React, { Component } from "react";
import './Post.css';
import Comment from './Comment';

class Post extends Component {
  state = {
    post: {},
    comment: []
  };

  async componentDidMount() {
    const postId = this.props.match.params.post_id;
    const postUrl = `http://localhost:3000/post/${postId}`;
    const commentUrl = `http://localhost:3000/post/comment/${postId}`;

    const post = await this.loadData(postUrl);
    const comment = await this.loadData(commentUrl);
    
    this.setState({
      post, comment
    });
  }

  loadData = async (url) => {
    const response = await fetch(url);
    const data = response.json();
    return data;
  };

  render() {
    const { post, comment } = this.state;

    // dev test
    console.log(this.props);
    console.log(this.props.match);

    return (
      <div className="Post">
        <h1>{post.title}</h1>
        <p>{post.content}</p>
        
        {/* {comment.map(com => (
          <ul className ="Comment">
            <li key={`post-${com.id}`}>{com.content}</li>
          </ul>
        ))} */}

        <Comment {...this.state.comment}
        match = {this.props.match}
        />

      </div>
    );
  }
}

export default Post;
