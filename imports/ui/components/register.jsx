import React from 'react'

export default class Register extends React.Component {
    componentDidMount() {
        $('#signup-link').on('click',function() {
            $('.ui.modal.signup').modal('show');
        })    
        $('.modal-close').on('click', function() {
            $('.ui.modal.signup').modal('hide');
        })    
        $('.ui.form.signup')
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
                                    <input type="text" name="eamil" placeholder="Emaill Address"/>
                                </div>
                            </div>
                            <div className="field">
                                <div className="ui left icon input">
                                    <i className="lock icon"></i>
                                    <input type="password" name="password" placeholder="Password"/>
                                </div>
                            </div>
                            <div className="field">
                                <div className="ui left icon input">
                                    <i className="check circle icon"></i>
                                    <input type="password" name="confirmation" placeholder="Confirmation"/>
                                </div>
                            </div>
                            <div className="ui fluid large teal submit button" id="login">Sign Up</div>
                        <div className="ui error message"></div>
                    </form>
                </div>                
            </div>
        )
    }
}