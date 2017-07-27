import React from 'react';
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as AuthActions from '../actions/auth.js';

import Navbar from './Navbar';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';

class App extends React.Component {
    render () {
        console.log(this.props);
        const loggingIn = this.props.state.auth.loggingIn;
        const user = this.props.state.auth.user;
        return (
            <div>      
                <Navbar loggingIn={loggingIn} user={user} />        
                <Header loggingIn={loggingIn} user={user} />  
                <Main loggingIn={loggingIn} user={user} />              
                <Footer />       
            </div>
        );
    }
}

App.propTypes = {
  state: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  state: state
})
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(AuthActions, dispatch)
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)