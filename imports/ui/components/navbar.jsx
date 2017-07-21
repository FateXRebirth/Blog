import React from 'react';
import { Session } from 'meteor/session';
import { FlowRouter } from 'meteor/kadira:flow-router';

export default class Navbar extends React.Component {
    render() {
        const isLoggedIn = this.props.isLoggedIn;
        return (
            <nav style = {{backgroundColor: '#1B1C1D'}}>
                <div className="ui container" >
                    <div className="ui large secondary inverted pointing menu">
                        <a className="toc item">
                            <i className="sidebar icon"></i>
                        </a>
                        <a className="active item" href="/">Home</a>
                        <a className="item">Work</a>
                        <a className="item">Company</a>
                        <a className="item">Careers</a>
                        { isLoggedIn ? (
                            <div className="right item">
                                <a className="ui inverted button" href="/logout">Log Out</a>
                            </div>
                        ) : (
                            <div className="right item">
                                <a className="ui inverted button" href="/login">Log In</a>
                                <a className="ui inverted button" href="/register">Sign Up</a>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
        )
    }
}