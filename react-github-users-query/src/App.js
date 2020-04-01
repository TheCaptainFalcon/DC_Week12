import React, { Component } from 'react';
import './App.css';
import UserCardList from './components/UserCardList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      userName: '',
      users: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

    handleChange = (event) => {
      this.setState({
        userName: event.target.value
      });
    }

    handleSubmit = async (event) => {
      event.preventDefault();
      const response = await fetch(`https://api.github.com/users/${this.state.userName}`);
      const data = await response.json();

      this.setState({
        userName: '',
        users: [...this.state.users, data]
      });  
    }

  render() { 
    
    return (  
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <label>This is a label
            <input 
              onChange={this.handleChange}
              type="text"
              value={this.state.userName}
              placeholder="Enter a username"
            />
            <button type="submit">Submit</button>
          </label>
        </form>
        <UserCardList userCardList={this.state.users}/>
      </div>
    );
  }
}

export default App;
