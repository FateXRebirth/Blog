import React from 'react'
import { Meteor } from 'meteor/meteor';
import { Users } from '../../api/users/users.js';

export default class Register extends React.Component {
    componentDidMount() {
        $('#signup-link').on('click',function() {
            $('.ui.modal.signup').modal('show');
        })    
        $('.modal-close').on('click', function() {
            $('.ui.modal.signup').modal('hide');
            $('.ui.modal.signup').form('clear');
        })    
        $('.ui.form.signup').form({
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
                let data = $('.ui.form.signup').form('get values');
                //$('.ui.form.signup').form('add errors', [ 'email exist']);   
                console.log(data);
                console.log("success");
                Meteor.call('CheckEmail', data.email, (error, result) => {
                    if(result.length != 0) {
                        console.log(result);
                        console.log("exist...");
                        $('.ui.form.signup').form('add errors', [ 'email exist']);  
                    } else {
                        console.log("create...");
                        Meteor.call('CreateUser', data.username, data.email, data.password);
                        $('.ui.modal.signup').modal('hide');
                        $('.ui.modal.signup').form('clear');
                    }
                })
            },
            onFailure: function() {
                console.log("faliure");
            }
        })       
        $('#signup').on('click', function() {
            $('.ui.form.signup').form('validate form');
        })    
    }
    
    render(){
        return(
            <div className="ui modal signup">
            
                <div className="header center aligned">
                    Sign Up
                    <div className="modal-close button"><i className="close icon"></i></div>
                </div>
                
                <div className="modal-form">
                    <form className="ui large form signup">
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
                            <div className="ui fluid large teal button" id="signup">Sign Up</div>
                        <div className="ui error message"></div>
                    </form>
                </div>                
            </div>
        )
    }
}