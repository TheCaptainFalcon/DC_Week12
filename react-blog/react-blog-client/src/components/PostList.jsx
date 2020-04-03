import React, { Component } from "react";
import './PostList.css';
import { Link } from "react-router-dom";

class PostList extends Component {
  state = {
    posts: []
  };

  async componentDidMount() {
    const allPostsUrl = "http://localhost:3000/post";
    
    const posts = await this.loadData(allPostsUrl);

    this.setState({
      posts
    });
  }

  loadData = async (url) => {
    const response = await fetch(url);
    const data = response.json();
    return data;
  };

  render() {
    const { posts } = this.state;

    // dev test
    console.log(this.props)

    return (
      <div className="PostList">
        <h1>This is a blog</h1>
        
          {posts.map(post => (
            <ul>
              <li key={`post-${post.id}`}>
                <Link to={`/post/${post.id}`}>{post.title}</Link>
              </li>
            </ul>
          ))}
      </div>
    );
  }
}

export default PostList;
