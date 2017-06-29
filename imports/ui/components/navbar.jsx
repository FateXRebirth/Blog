import React from 'react';
import $ from 'jquery';

import Login from './login';
import Register from './register';

// import element from semantic-ui-react
//import { Header, Segment, Button, Menu } from 'semantic-ui-react';

export default class Navbar extends React.Component {
    componentDidMount() {
        
    }
    componentWillUnmount() {
        
    }
    render() {
        return (
            <div className="ui container">
            <div className="ui large secondary inverted pointing menu">
                <a className="toc item">
                <i className="sidebar icon"></i>
                </a>
                <a className="active item">Home</a>
                <a className="item">Work</a>
                <a className="item">Company</a>
                <a className="item">Careers</a>
                <div className="right item">
                <a className="ui inverted button" id="login-link">Log in</a><Login />
                <a className="ui inverted button" id="signup-link">Sign Up</a><Register />
                </div>
            </div>
            </div>
        )
    }
}