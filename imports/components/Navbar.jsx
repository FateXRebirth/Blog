import React from 'react';
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { user_logout } from '../actions/auth.js';

class Navbar extends React.Component {

    handleLogout() {
        this.props.user_logout(null);
        localStorage.clear();
        this.props.history.push('/');
    }

    render() {
        const loggingIn = this.props.loggingIn;      
        return (
            <nav className="navbar">
                <div className="ui container secondary  menu">
                    { loggingIn ? (
                        <div className="left menu">
                        <Link to='/blog'><img className="ui circular image" src="/icons/semantic-ui-logo.png"/></Link>
                        <p className="item"> Growing with the Web </p>
                    </div>) : (
                        <div className="left menu">
                        <Link to='/'><img className="ui circular image" src="/icons/semantic-ui-logo.png"/></Link>
                        <p className="item"> Growing with the Web </p>
                    </div>)
                    }
                    <div className="right menu">
                        <div className="item">
                            <div className="ui icon input">
                                <input type="text" placeholder="Search..."/>
                                <i className="search link icon"></i>
                            </div>
                        </div>
                        { loggingIn ? (
                            <div className="right item">
                                <Link to='/dashboard' className="ui item">Dashboard</Link>
                                <a className="ui item" onClick={this.handleLogout.bind(this)}>Log Out</a>                                
                            </div>
                        ) : (
                            <div className="right item">
                                <Link to='/login' className="ui item">Log In</Link> 
                                <Link to='/register' className="ui item">Sign Up</Link>
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