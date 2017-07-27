import React from 'react';
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as AuthActions from '../actions/auth.js';
import { Link, Redirect } from 'react-router-dom';

class Navbar extends React.Component {
    handleLogout() {
        console.log(this.props);
        const actions = this.props.actions;
        console.log("Click");
        actions.fake_logout();
        localStorage.clear();
        <Redirect to='/' />
    }
    render() {
        const isLoggedIn = this.props.isLoggedIn;
        console.log(this.props)
        return (
            <nav style = {{backgroundColor: '#1B1C1D'}}>
                <div className="ui container" >
                    <div className="ui large secondary inverted pointing menu">
                        <a className="toc item">
                            <i className="sidebar icon"></i>
                        </a>
                        <Link to='/' className="active item">Home</Link>
                        { isLoggedIn ? (
                            <div className="right item">
                                <a className="ui inverted button" href={'/' + currentUser + '/setting'}>Setting</a>
                                <a className="ui inverted button" href={'/' + currentUser}>Dashboard</a>
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

Navbar.propTypes = {
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
)(Navbar)