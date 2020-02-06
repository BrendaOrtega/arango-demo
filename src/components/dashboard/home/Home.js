import React, {Component} from 'react';
import {Sidebar} from '../sidebar/Sidebar';

class Home extends Component {
    render() {
        return (
            <div className="container">
                <Sidebar />
                <h1>Home</h1>
            </div>
        )
    }
}

export default Home;