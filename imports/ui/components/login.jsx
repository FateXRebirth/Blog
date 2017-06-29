import React from 'react'

export default class Login extends React.Component {
    componentDidMount() {
        $('#login-link').on('click',function() {
            $('.ui.modal.login').modal("show");
        })    
        $('.modal-close').on('click', function() {
            $('.ui.modal.login').modal('hide');
        })
        $('.ui.form.login')
        .form({
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
          }
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
                                <input type="text" name="email" placeholder="E-mail address"/>
                            </div>
                            </div>
                            <div className="field">
                            <div className="ui left icon input">
                                <i className="lock icon"></i>
                                <input type="password" name="password" placeholder="Password"/>
                            </div>
                            </div>
                            <div className="ui fluid large teal submit button" id="login">Login</div>
                        <div className="ui error message"></div>
                    </form>
                </div>                
            </div>
        )
    }
}