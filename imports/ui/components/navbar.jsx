import React from 'react';

import Login from './login';
import Register from './register';

export default class Navbar extends React.Component {
    constructor(props){
        super(props)
        this.handleCheckLogin = this.handleCheckLogin.bind(this);
    }

    handleCheckLogin(value) {
        this.props.onCheck(value);
    }

    render() {
        const isLoggedIn = this.props.isLoggedIn;
        if(isLoggedIn){
            console.log("Navbar receive loggined");
        } else {
            console.log("Navbar does not receive loggined");
        }
        return (
            <nav style = {{backgroundColor: '#1B1C1D'}}>
                <div className="ui container" >
                    <div className="ui large secondary inverted pointing menu">
                        <a className="toc item">
                            <i className="sidebar icon"></i>
                        </a>
                        <a className="active item">Home</a>
                        <a className="item">Work</a>
                        <a className="item">Company</a>
                        <a className="item">Careers</a>
                        { isLoggedIn ? (
                            <div className="right item">
                                <a className="ui inverted button" id="logout-link" onClick={() => this.handleCheckLogin(false)}>Log Out</a>
                            </div>
                        ) : (
                            <div className="right item">
                                <a className="ui inverted button" id="login-link" href="/login" onClick={() => this.handleCheckLogin(true)}>Log In</a>
                                <a className="ui inverted button" id="signup-link">Sign Up</a>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
        )
    }
}