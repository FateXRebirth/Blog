import React from 'react'

export default class Login extends React.Component {
    
    // componentDidMount() {
    //     $('#login-link').on('click',function() {
    //         $('.ui.modal.login').modal("show");
    //     })    
    //     $('.modal-close').on('click', function() {
    //         $('.ui.modal.login').modal('hide');
    //         $('.ui.modal.login').form('clear');
    //     })        
    //     $('.ui.form.login').form({
    //         keyboardShortcuts: false,
    //         fields: {
    //             email: { 
    //                 identifier  : 'email',
    //                 rules: [
    //                     {
    //                         type   : 'empty',
    //                         prompt : 'Please enter your e-mail'
    //                     },
    //                     {
    //                         type   : 'email',
    //                         prompt : 'Please enter a valid e-mail'
    //                     }
    //                 ]
    //             },
    //             password: {
    //                 identifier  : 'password',
    //                 rules: [
    //                     {
    //                         type   : 'empty',
    //                         prompt : 'Please enter your password'
    //                     },
    //                     {
    //                         type   : 'length[6]',
    //                         prompt : 'Your password must be at least 6 characters'  
    //                     }
    //                 ]
    //             }
    //         },   
    //         onSuccess: function() {
    //             let data = $('.ui.form.login').form('get values');
    //             //$('.ui.form.signup').form('add errors', [ 'email exist']);   
    //             console.log(data);
    //             console.log("success");
    //             Meteor.call('CheckEmail', data.email, (error, result) => {
    //                 if(result.length == 0) {
    //                     console.log("not exist...");
    //                     $('.ui.form.login').form('add errors', [ 'email do not exist']);  
    //                 } else {
    //                     console.log(result);
    //                     result.forEach( (element) => {
    //                         console.log(element);
    //                         console.log(element.password);
    //                         console.log(data.password);
    //                         if(element.password == data.password) {
    //                             console.log("password correct");
    //                             $('.ui.modal.login').modal('hide');
    //                             $('.ui.modal.login').form('clear');
    //                             Meteor.call('Login', data);
    //                         } else {
    //                                 console.log("password not correct");
    //                                 $('.ui.form.login').form('add errors', [ 'password is wrong']);
    //                         }            
    //                     });
    //                 }
    //             })
    //         },
    //         onFailure: function() {
    //             console.log("faliure");
    //         }
    //     })
    // }
   
    render(){
        return(
            <div className="ui middle aligned center aligned grid">
                <div className="column">
                    <h2 className="ui teal image header">
                        <img src="assets/images/logo.png" className="image"/>
                        <div className="content">
                            Log-in to your account
                        </div>
                    </h2>
                    <form className="ui large form">
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
                        <div className="ui fluid large teal submit button">Login</div>
                    </div>

                    <div className="ui error message"></div>

                    </form>

                    <div className="ui message">
                        New to us? <a href="#">Sign Up</a>
                    </div>
                </div>
            </div>
        )
    }
}