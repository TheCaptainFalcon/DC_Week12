import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import IssueList from './Components/IssueList';


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
