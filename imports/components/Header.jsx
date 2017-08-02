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

            </header> 
        )
    }
}