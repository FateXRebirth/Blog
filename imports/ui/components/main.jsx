import React from 'react';

import Blog from './blog';
import Friends from './friends';

export default class Main extends React.Component {
    render() {
        const currentUser = this.props.user;
        let service = null;
        if(this.props.service) {
            if(this.props.service == 'blog') {
                service = <Blog user={currentUser} /> 
            } else if(this.props.service == 'friends') {
                service = <Friends user={currentUser} />
            }
        }
        
        return (
            <div className="ui container">
                <h1> Dashboard page </h1>
                { service ? ( service ) :
                (<div className="ui massive horizontal divided list">
                    <div className="item">
                        <img className="ui avatar image" src="/images/avatar/small/helen.jpg"/>
                        <div className="content">
                        <div className="header">Blog</div>
                        </div>
                    </div>
                    <div className="item">
                        <img className="ui avatar image" src="/images/avatar/small/christian.jpg"/>
                        <div className="content">
                        <div className="header">Social</div>
                        </div>
                    </div>
                    <div className="item">
                        <img className="ui avatar image" src="/images/avatar/small/daniel.jpg"/>
                        <div className="content">
                        <div className="header">Media</div>
                        </div>
                    </div>
                    <div className="item">
                        <img className="ui avatar image" src="/images/avatar/small/daniel.jpg"/>
                        <div className="content">
                        <div className="header">Drive</div>
                        </div>
                    </div>
                </div>)}                
            </div>
        )
    }  
}