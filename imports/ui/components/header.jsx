import React from 'react';

import Navbar from './navbar';

export default class Header extends React.Component {
    // constructor(props){
    //     super(props)
    // }
    render() {
        let content = null;
        if(this.props.isLoggedIn){
            console.log("Header receive loggined");
        } else {
            console.log("Header does not receive loggined");
        }
        return (
            
            <div className="head">
            <div className="ui inverted vertical masthead center aligned segment">
                         
                <div className="ui text container">
                <h1 className="ui inverted header">
                    Imagine-a-Company
                </h1>
                <h2>Do whatever you want when you want to.</h2>
                <div className="ui huge primary button">Get Started <i className="right arrow icon"></i></div>
                </div>
            </div>      
            </div> 
        )
    }
}