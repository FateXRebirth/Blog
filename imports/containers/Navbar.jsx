import React from 'react';
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { user_logout } from '../actions/auth.js';

class Navbar extends React.Component {

    handleLogout() {
        this.props.user_logout()
        localStorage.clear();
        this.props.history.push('/');
    }

    render() {
        const loggingIn = this.props.loggingIn;      
        return (
            <nav style = {{backgroundColor: '#1B1C1D'}}>
                <div className="ui container" >
                    <div className="ui large secondary inverted pointing menu">
                        <a className="toc item">
                            <i className="sidebar icon"></i>
                        </a>
                        <Link to='/' className="active item">Home</Link>
                        { loggingIn ? (
                            <div className="right item">
                                <Link to='/setting' className="ui inverted button">Setting</Link>
                                <Link to='/blog' className="ui inverted button">Blog</Link>
                                <Link to='/dashboard' className="ui inverted button">Dashboard</Link> 
                                <a className="ui inverted button" onClick={this.handleLogout.bind(this)}>Log Out</a>                                
                            </div>
                        ) : (
                            <div className="right item">
                                <Link to='/login' className="ui inverted button">Log In</Link> 
                                <Link to='/register' className="ui inverted button">Sign up</Link>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({user_logout}, dispatch)
}

export default withRouter(connect(null, mapDispatchToProps)(Navbar))