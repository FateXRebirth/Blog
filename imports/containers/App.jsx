import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter, Route } from 'react-router-dom';

import Navbar from './Navbar';
import Header from '../components/Header';
import Intro from '../components/Intro';
import Login from '../containers/Login';
import Register from '../containers/Register';
import Footer from '../components/Footer';

class App extends React.Component {
    render () {
        console.log(this.props)
        const loggingIn = this.props.auth.loggingIn;
        const user = this.props.auth.user;
        return (
            <div>      
                <Navbar loggingIn={loggingIn} user={user} />        
                <Header loggingIn={loggingIn} user={user} />  
                <Route exact path='/' component={Intro} />                    
                <Route exact path='/login' component={Login}/>
                <Route exact path='/register' component={Register}/>              
                <Footer />      
            </div>
        );
    }
}

export default withRouter(connect(state => state)(App))