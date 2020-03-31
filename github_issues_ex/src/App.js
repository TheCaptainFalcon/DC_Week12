import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, } from 'react-router-dom';
import IssueList from './Components/IssueList';
import IssueDetail from './Components/IssueDetail';


function App() {
  return (
    <div className="App">
      <Router>
        <Route path ='/' exact component={IssueList}/>  
        <Route path ='/issue/:issue_number?' component={IssueDetail}/>
      </Router>
    </div>
  );
}

export default App;
