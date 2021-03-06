import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter, Redirect, Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Header from './Header';
import Intro from './Intro';
import Dashboard from './Dashboard';
import Login from './Login';
import Register from './Register';
import Footer from './Footer';
import NotFound from './NotFound';
import Blog from './Blog';
import Post from './Post';
import EditPost from './EditPost';
import DeletePost from './DeletePost';

class App extends React.Component {
    
    render () {     
        let loggingIn = null;
        let user = null;
        let id = null;
        if(localStorage.getItem('currentUser')) {
            loggingIn = true;
            id = localStorage.getItem('id');
            user = localStorage.getItem('currentUser');
        } else {
            loggingIn = this.props.auth.loggingIn; 
            if(this.props.auth.user) {
                id = this.props.auth.user.id;
                user = this.props.auth.user.username;
            }            
        }
        return (
            <div className="App">      
                <Navbar loggingIn={loggingIn} />        
                <Header loggingIn={loggingIn} />  
                <Switch>
                    <Route exact path='/' component={Intro} />            
                    <Route path='/login' component={Login} />
                    <Route path='/register' component={Register} /> 
                    <Route exact path='/blog' render={ () => (
                        loggingIn ? (
                            <Blog user={user}/>
                        ) : (
                            <Redirect to='/login' />
                        )
                    )} /> 
                    <Route path='/blog/:id' render={ () => (
                        loggingIn ? (
                            <Post />
                        ) : (
                            <Redirect to='/login' />
                        )
                    )} /> 
                    <Route exact path='/dashboard' render={ () => (
                        loggingIn ? (
                            <Dashboard id={id} user={user}/>
                        ) : (
                            <Redirect to='/login' />
                        )
                    )} />
                    <Route path='/dashboard/edit/:id' render={ () => (
                        loggingIn ? (
                            <EditPost />
                        ) : (
                            <Redirect to='/login' />
                        )
                    )} />  
                    <Route path='/dashboard/delete/:id' render={ () => (
                        loggingIn ? (
                            <DeletePost />
                        ) : (
                            <Redirect to='/login' />
                        )
                    )} />  
                    <Route path='/notFound' component={NotFound} />
                    <Redirect to='/notFound' />      
                </Switch>
                <Footer />

                {/* Just for model element */}
                <div className="ui mini modal deleteUser">
                    <div className="header">
                    Delete Your Account
                    </div>
                    <div className="content">
                    <p>Are you sure you want to delete your account?</p>
                    </div>
                    <div className="actions">
                    <div className="ui negative button" id="no">
                        No
                    </div>
                    <div className="ui positive right labeled icon button" id="yes">
                        Yes
                        <i className="checkmark icon"></i>
                    </div>
                    </div>
                </div>
  
            </div>

            
        );
    }
}

export default withRouter(connect(state => state)(App))