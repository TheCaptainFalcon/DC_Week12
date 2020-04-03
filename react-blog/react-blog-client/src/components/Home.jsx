import React, { Component } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

class Home extends Component {
    state = {  
            home: []
    };

    async componentDidMount() {
        const homeUrl = "http://localhost:3000/";
        const home = await this.loadData(homeUrl);
        this.setState({
            home
        });
    }

    loadData = async (url) => {
        const response = await fetch(url);
        const data = response.json();
        return data;
    };

    render() { 
        const { home } = this.state;

        return (  
            <div>
                <h2>This is the home page</h2>
            </div>
                
        );
    }
}
 
export default Home;