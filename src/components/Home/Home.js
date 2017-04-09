import React, { Component } from 'react';
import { Link } from 'react-router';

class Home extends Component {
    render() {
        return (
            <div className="jumbotron">
                <h1>Hello, Folks</h1>
                <p></p>
                <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
            </div>
        );
    }
}

export default Home;