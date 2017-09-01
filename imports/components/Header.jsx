import React from 'react';
import { Link, withRouter } from 'react-router-dom';

export default class Header extends React.Component { 
    
    render() {
        const loggingIn = this.props.loggingIn; 
        return (
            <header id="header">
                { loggingIn ? 
                (<div className="ui container">
                <p className="title">Welcome!</p>
                <p className="content">My name is Kevin Peng, I'm a software engineer from Taiwan. I live in Taipei and work at Microsoft on Visual Studio Code. I use this blog as a platform to learn, revise and teach various software development topics.</p>
                </div>) : 
                (<div className="ui container">
                    <p className="title">Create a unique blog</p>
                    <p className="content">Start publishing in seconds. Instantly create the personal or professional blog of your dreams to share your ideas on the web.</p>
                    <Link to='/register' className="ui positive button">Get Started</Link>
                </div>) 
                }                
            </header> 
        )
    }
}
