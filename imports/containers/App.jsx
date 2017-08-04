import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter, Redirect, Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Header from '../components/Header';
import Intro from '../components/Intro';
import Main from '../components/Main';
import Login from '../containers/Login';
import Register from '../containers/Register';
import Footer from '../components/Footer';
import NotFound from '../components/NotFound';

import Blog from '../components/Blog'

class App extends React.Component {
    
    render () {
        console.log(this.props)
        const loggingIn = this.props.auth.loggingIn;
        const user = this.props.auth.user;

        // const PrivateRoute = ({ component: Component }) => (
        //     <Route render={() => (
        //     loggingIn ? (
        //         <Component />
        //     ) : (
        //         <Redirect to={{
        //         pathname: '/login'
        //         }}/>
        //     )
        //     )}/>
        // )

        return (
            <div className="App">      
                <Navbar loggingIn={loggingIn} user={user} />        
                <Header loggingIn={loggingIn} user={user} />  
                <Switch>
                    <Route exact path='/' component={Intro} />            
                    <Route path='/login' component={Login} />
                    <Route path='/register' component={Register} /> 
                    <Route path='/dashboard' render={ () => (
                        loggingIn ? (
                            <Main />
                        ) : (
                            <Redirect to='/login' />
                        )
                    )} /> 
                    <Route path='/blog' render={ () => (
                        loggingIn ? (
                            <Blog />
                        ) : (
                            <Redirect to='/login' />
                        )
                    )} /> 
                    {/* <PrivateRoute path='/dashboard' component={Main} /> */}
                    <Route path='/notFound' component={NotFound} />
                    <Redirect to='/notFound' />      
                </Switch>
                <Footer />      
            </div>
        );
    }
}

export default withRouter(connect(state => state)(App))