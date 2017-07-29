import React from 'react';
import { Route, withRouter, Link } from 'react-router-dom';
import Blog from './Blog';
import Circle from './Circle';

class Main extends React.Component {
    render() {
        console.log(this.props);
        return (            
            <div className="ui container dashboard center aligned">
                <h1> Dashboard page </h1>
                <div className="ui massive horizontal divided list">
                    <div className="item">
                        <img className="ui avatar image" src="/icons/1497280753_blog.png"/>
                        <div className="content">
                        <Link to={`${this.props.match.path}/blog`} className="header">Blog</Link>
                        </div>
                    </div>
                    <div className="item">
                        <img className="ui avatar image" src="/icons/friends.png"/>
                        <div className="content">
                        <a href='/circle'><div className="header">Social</div></a>
                        </div>
                    </div>
                    <div className="item">
                        <img className="ui avatar image" src="/icons/Drive-Bootcamp.png"/>
                        <div className="content">
                        <a href='/drive'><div className="header">Drive</div></a>
                        </div>
                    </div>
                </div>             
                <Route path={`${this.props.match.path}/blog`} component={Blog}/>
                <Route path={`${this.props.match.path}/circle`} component={Circle} />
            </div>            
        )
    }  
}

export default withRouter(Main);