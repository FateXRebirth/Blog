import React from 'react'
import { Meteor } from 'meteor/meteor';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { user_login } from '../actions/auth.js';

class Register extends React.Component {

    handleRegister() {
        let value = $('.ui.form.signup').form('validate form');
        if(value) {
            let data = $('.ui.form.signup').form('get values');
            Meteor.call('CheckEmail', data.email, (error, result) => {
                if(result.length != 0) {
                    $('.ui.form.signup').form('add errors', [ 'email exist']);  
                } else {
                    Meteor.call('CreateUser', data.username, data.email, data.password);
                    localStorage.setItem('currentUser', JSON.stringify(element.username));   
                    this.props.history.push('/')
                    this.props.user_login();                      
                }
            })
        }
    }

    componentDidMount() { 
        $('.ui.form.signup').form({
            keyboardShortcuts: false,
            fields: {
                username: { 
                    identifier  : 'username',
                    rules: [
                        {
                            type   : 'empty',
                            prompt : 'Please enter your username'
                        }
                    ]
                },
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
                },
                confirmation: {
                    identifier  : 'confirmation',
                    rules: [
                        {
                            type   : 'empty',
                            prompt : 'Please enter the confirmation'
                        },
                        {
                            type   : 'length[6]',
                            prompt : 'The confirmation must be at least 6 characters'
                        },
                        {
                            type   : 'match[password]',
                            prompt : 'Password and confirmation should be same'
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
            <div className="registerPage">
                <div className="ui middle aligned center aligned grid">
                    <div className="column">
                        <h2 className="ui teal image header">
                            <img src="icons/semantic-ui-logo.png" className="image"/>
                            <div className="content">
                                Sign-up to your account
                            </div>
                        </h2>
                        <form className="ui large form signup">
                        <div className="ui stacked segment">
                            <div className="field">
                                <div className="ui left icon input">
                                    <i className="user icon"></i>
                                    <input type="text" name="username" placeholder="Username"/>
                                </div>
                            </div>
                            <div className="field">
                                <div className="ui left icon input">
                                    <i className="mail icon"></i>
                                    <input type="text" name="email" placeholder="Email Address"/>
                                </div>
                            </div>
                            <div className="field">
                                <div className="ui left icon input">
                                    <i className="lock icon"></i>
                                    <input type="password" name="password" id="password" placeholder="Password"/>
                                </div>
                            </div>
                            <div className="field">
                                <div className="ui left icon input">
                                    <i className="check circle icon"></i>
                                    <input type="password" name="confirmation" placeholder="Confirmation"/>
                                </div>
                            </div>
                            <div className="ui fluid large teal button" onClick={this.handleRegister.bind(this)}>Sign Up</div>
                        </div>

                        <div className="ui error message"></div>

                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({user_login}, dispatch)
}

export default connect(null, mapDispatchToProps)(Register)