import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Posts from './components/Posts'


function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path = '/' component={ Posts } />
      </Router>
      
    </div>
  );
}

export default App;
