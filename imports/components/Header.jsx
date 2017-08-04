import React from 'react';

export default class Header extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            user: null
        }
    }
    
    componentWillReceiveProps(nextProps) {
        if(this.props != nextProps) {
            let user = this.props.user;
            Meteor.call('GetUser', user, (error, result) => {
                if(result) {                    
                    this.setState({ user: result[0] });
                } else {
                    console.log(error);
                }
            })
        }        
    }
    
    render() {
        const loggingIn = this.props.loggingIn;     
        const user = this.state.user;
        return (
            <header className="header">
                { loggingIn ? 
                (<div className="ui container">
                    <p className="title">Welcome!</p>
                    <p className="content">My name is Daniel Imms, I'm a software engineer from Australia. I live in Redmond and work at Microsoft on Visual Studio Code. I use this blog as a platform to learn, revise and teach various software development topics.</p>
                </div>) : 
                (<div className="ui container">
                    <p className="title">Create a unique blog</p>
                    <p className="content">Start publishing in seconds. Instantly create the personal or professional blog of your dreams to share your ideas on the web.</p>
                    <button className="ui positive button">Get Started</button>
                </div>) 
                }                
            </header> 
        )
    }
}