import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import IssueList from './Components/IssueList';
import IssueDetail from './Components/IssueDetail';


function App() {
  return (
    <div className="App">
      <Router>
        <Route path ='/' exact component={IssueList}/>  
        
      </Router>
    </div>
  );
}

export default App;
