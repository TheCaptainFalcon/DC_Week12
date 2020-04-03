import React, { Component } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

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
            <div className="Home">
                <nav className="Home-nav">
                    <Navbar bg="dark" variant="dark">
                        <Nav className="mr-auto">
                            <Nav.Link><Link exact activeClassName='active-link' to="/">Home</Link></Nav.Link>
                            <Nav.Link><Link exact activeClassName='active-link' to="/post">Post</Link></Nav.Link>
                        </Nav>
                    </Navbar>
                </nav>

                <h2>This is the home page</h2>
                <img src="https://images.immediate.co.uk/production/volatile/sites/3/2016/08/115819.jpg?quality=90&resize=561%2C374"></img>
                
            </div>
                
        );
    }
}
 
export default Home;