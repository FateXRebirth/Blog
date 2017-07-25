import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';

import Blog from './blog';
import Circle from './circle';

export default class Main extends React.Component {
    render() {
        const currentUser = this.props.user;
        let service = null;
        if(this.props.service) {
            if(this.props.service == 'blog') {
                service = <Blog user={currentUser} /> 
            } else if(this.props.service == 'circle') {
                service = <Circle user={currentUser} />
            }
        }
        
        return (            
            <div className="ui container dashboard center aligned">
                <h1> Dashboard page </h1>
                { service ? ( service ) :
                (<div className="ui massive horizontal divided list">
                    <div className="item">
                        <img className="ui avatar image" src="/icons/1497280753_blog.png"/>
                        <div className="content">
                        <a href={FlowRouter.current().path+'/blog'}><div className="header">Blog</div></a>
                        </div>
                    </div>
                    <div className="item">
                        <img className="ui avatar image" src="/icons/friends.png"/>
                        <div className="content">
                        <a href={FlowRouter.current().path+'/circle'}><div className="header">Social</div></a>
                        </div>
                    </div>
                    <div className="item">
                        <img className="ui avatar image" src="/icons/Drive-Bootcamp.png"/>
                        <div className="content">
                        <a href={FlowRouter.current().path+'/drive'}><div className="header">Drive</div></a>
                        </div>
                    </div>
                </div>)}                
            </div>
        )
    }  
}