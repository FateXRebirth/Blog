import React from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
    
    componentWillReceiveProps(nextProps) {
        if(this.props != nextProps) {
            // if( this.props.user) {
            //     Meteor.call('GetUser', this.props.user, (error, result) => {
            //         if(result) {    
            //             console.log(result);                
            //         } else {
            //             console.log(error);
            //         }
            //     })
            // }
        }        
    }
    
    render() {
        const loggingIn = this.props.loggingIn;     
        return (
            <header id="header">
                { loggingIn ? 
                (<div className="ui container">
                    <p className="title">Welcome!</p>
                    <p className="content">My name is Daniel Imms, I'm a software engineer from Australia. I live in Redmond and work at Microsoft on Visual Studio Code. I use this blog as a platform to learn, revise and teach various software development topics.</p>
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