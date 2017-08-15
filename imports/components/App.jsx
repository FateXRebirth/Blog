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
import Blog from './Blog'

class App extends React.Component {
    
    render () {
        let loggingIn = null;
        let user = null;
        if(localStorage.getItem('currentUser')) {
            loggingIn = true;
            user = localStorage.getItem('currentUser');
        } else {
            loggingIn = this.props.auth.loggingIn;
            user = this.props.auth.user;  
        }
        return (
            <div className="App">      
                <Navbar loggingIn={loggingIn} />        
                <Header loggingIn={loggingIn} />  
                <Switch>
                    <Route exact path='/' component={Intro} />            
                    <Route path='/login' component={Login} />
                    <Route path='/register' component={Register} /> 
                    <Route path='/blog' render={ () => (
                        loggingIn ? (
                            <Blog />
                        ) : (
                            <Redirect to='/login' />
                        )
                    )} /> 
                    <Route path='/dashboard' render={ () => (
                        loggingIn ? (
                            <Dashboard />
                        ) : (
                            <Redirect to='/login' />
                        )
                    )} /> 
                    <Route path='/notFound' component={NotFound} />
                    <Redirect to='/notFound' />      
                </Switch>
                <Footer />      
            </div>
        );
    }
}

export default withRouter(connect(state => state)(App))