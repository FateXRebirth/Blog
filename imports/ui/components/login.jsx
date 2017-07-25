import React from 'react'
import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';

export default class Login extends React.Component {    
    componentDidMount() {
        $('#login').on('click', () => {
            $('.ui.form.login').form('validate form');  
        })
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
                let data = $('.ui.form.login').form('get values');  
                console.log("success");
                Meteor.call('CheckEmail', data.email, (error, result) => {
                    if(result.length == 0) {
                        console.log("not exist...");
                        $('.ui.form.login').form('add errors', [ 'email do not exist']);  
                    } else {
                        console.log(result);
                        result.forEach( (element) => {
                            console.log(element);
                            if(element.password == data.password) {
                                console.log("password correct");                                
                                localStorage.setItem('currentUser', JSON.stringify(element.username));
                                FlowRouter.go(FlowRouter.path("user", { user: element.username }));
                            } else {
                                console.log("password not correct");
                                $('.ui.form.login').form('add errors', [ 'password is wrong']);
                            }            
                        });
                    }
                })
            },
            onFailure: function() {
                console.log("faliure");
            }
        })
    }
   
    render(){
        return(
            <div className="loginPage">
                <div className="ui middle aligned center aligned grid">
                    <div className="column">
                        <h2 className="ui teal image header">
                            <img src="icons/semantic-ui-logo.png" className="image"/>
                            <div className="content">
                                Log-in to your account
                            </div>
                        </h2>
                        <form className="ui large form login">
                        <div className="ui stacked segment">
                            <div className="field">
                                <div className="ui left icon input">
                                    <i className="user icon"></i>
                                    <input type="text" name="email" placeholder="E-mail address"/>
                                </div>
                            </div>
                            <div className="field">
                                <div className="ui left icon input">
                                    <i className="lock icon"></i>
                                    <input type="password" name="password" placeholder="Password"/>
                                </div>
                            </div>
                            <div className="ui fluid large teal button" id="login">Login</div>
                        </div>

                        <div className="ui error message"></div>

                        </form>

                        <div className="ui message">
                            New to us? <a href="/register">Sign Up</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}