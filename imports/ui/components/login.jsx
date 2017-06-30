import React from 'react'

export default class Login extends React.Component {
    componentDidMount() {
        $('#login-link').on('click',function() {
            $('.ui.modal.login').modal("show");
        })    
        $('.modal-close').on('click', function() {
            $('.ui.modal.login').modal('hide');
            $('.ui.modal.login').form('clear');
        })        
        $('.ui.form.login').form({
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
                //$('.ui.form.signup').form('add errors', [ 'email exist']);   
                console.log(data);
                console.log("success");
                Meteor.call('CheckEmail', data.email, (error, result) => {
                    if(result.length == 0) {
                        console.log("not exist...");
                        $('.ui.form.login').form('add errors', [ 'email do not exist']);  
                    } else {
                        console.log(result);
                        result.forEach( (element) => {
                            console.log(element);
                            console.log(element.password);
                            console.log(data.password);
                            if(element.password == data.password) {
                                console.log("password correct");
                                $('.ui.modal.login').modal('hide');
                                $('.ui.modal.login').form('clear');
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
        $('#login').on('click', function() {
            $('.ui.form.login').form('validate form');
        })  
    }
   
    render(){
        return(
            <div className="ui modal login">
            
                <div className="header center aligned">
                    Login
                    <div className="modal-close button"><i className="close icon"></i></div>
                </div>
                
                <div className="modal-form">
                    <form className="ui large form login">
                            <div className="field">
                            <div className="ui left icon input">
                                <i className="mail icon"></i>
                                <input type="text" name="email" placeholder="Email address"/>
                            </div>
                            </div>
                            <div className="field">
                            <div className="ui left icon input">
                                <i className="lock icon"></i>
                                <input type="password" name="password" placeholder="Password"/>
                            </div>
                            </div>
                            <div className="ui fluid large teal button" id="login">Login</div>
                        <div className="ui error message"></div>
                    </form>
                </div>                
            </div>
        )
    }
}