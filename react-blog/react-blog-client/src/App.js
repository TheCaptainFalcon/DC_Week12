import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import PostList from "./components/PostList";
import Post from "./components/Post";
import Comment from "./components/Comment";

import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/post" component={PostList} />
        <Route exact path="/post/:post_id?" component={Post} />
        <Route exact path="/post/comment/:post_id?" component={Comment}/>
      </Switch>
    </Router>
  );
}

export default App;
