import React from 'react'
import { Meteor } from 'meteor/meteor';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { user_login } from '../actions/auth.js';

class Login extends React.Component { 

    handleLogin() {
        let value = $('.ui.form.login').form('validate form');
        if(value) {
            let data = $('.ui.form.login').form('get values');  
            Meteor.call('CheckEmail', data.email, (error, result) => {
                if(result) {
                    if(result.password == data.password) {          
                        localStorage.setItem('id', result.id);                      
                        localStorage.setItem('currentUser', result.username);
                        this.props.user_login({ id: result.id, username: result.username });
                        this.props.history.push('/blog')
                    } else {
                        $('.ui.form.login').form('add errors', [ 'Password is wrong']);
                    }     
                } else {
                    $('.ui.form.login').form('add errors', [ 'Email does not exist']);  
                }
            })
        }       
    }   
    
    componentDidMount() {
        $('.ui.form.login').form({
            keyboardShortcuts: false,
            fields: {
                email: { 
                    identifier  : 'email',
                    rules: [
                        {
                            type   : 'empty',
                            prompt : 'Please enter your e-mail'
                        },
                        {
                            type   : 'email',
                            prompt : 'Please enter a valid e-mail'
                        }
                    ]
                },
                password: {
                    identifier  : 'password',
                    rules: [
                        {
                            type   : 'empty',
                            prompt : 'Please enter your password'
                        },
                        {
                            type   : 'length[6]',
                            prompt : 'Your password must be at least 6 characters'  
                        }
                    ]
                }
            },   
            onSuccess: function() {
                return true
            },
            onFailure: function() {
                return false
            }
        })
    }
   
    render(){
        return(
            <div className="loginPage">
                <div className="ui container center aligned range">
                    <div className="title">
                        <img src="icons/semantic-ui-logo.png"/>
                            <h2 className="content">
                                Log-in to your account
                            </h2>
                    </div>
                    <form className="ui large form login">
                        <div className="ui stacked segment">
                            <div className="field">
                                <div className="ui left icon input">
                                    <i className="user icon"></i>
                                    <input type="text" name="email" placeholder="E-mail address" id="email"/>
                                </div>
                            </div>
                            <div className="field">
                                <div className="ui left icon input">
                                    <i className="lock icon"></i>
                                    <input type="password" name="password" placeholder="Password" id="password"/>
                                </div>
                            </div>
                            <div className="ui fluid large teal button" id="login" onClick={this.handleLogin.bind(this)}>Login</div>
                        </div>

                        <div className="ui error message"></div>

                    </form>

                    <div className="ui message">
                        New to us? <Link to='/register' id="redirect">Sign Up</Link>
                    </div>
                </div>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({user_login}, dispatch)
}

export default withRouter(connect(null, mapDispatchToProps)(Login))