import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';

export default class Register extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      error: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    let username = this.refs.username.value;
    let email = this.refs.email.value;
    let password = this.refs.password.value;
    let confirmation = this.refs.confirmation.value;
    if( password != confirmation ) {
      this.setState({ error: "Password should be same"})
      return;
    }  
    else {      
      Accounts.createUser({username: username, email: email, password: password}, (err) => {
        if(err){
          this.setState({
            error: err.reason
          });
        } else {
          console.log("Success");
          $('#registerModal').modal('hide');
          FlowRouter.go('');
        }
      });
    }
  }

  render() {
    const error = this.state.error;
    return <div className="modal fade" id="registerModal" role="dialog" aria-labelledby="exampleModalLabel">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 className="modal-title" id="exampleModalLabel">Sign Up</h4>
          </div>
          <form onSubmit={this.handleSubmit}>
          <div className="modal-body">
            { error.length > 0 ?
                <div className="alert alert-danger fade in">{error}</div>
                :''}            
              <div className="form-group">
                <label htmlFor="username" className="control-label">Name</label>
                <input type="text" className="form-control" ref="username"/>
              </div>
              <div className="form-group">
                <label htmlFor="email" className="control-label">E-mail</label>
                <input type="text" className="form-control" ref="email"/>
              </div>
              <div className="form-group">
                <label htmlFor="password" className="control-label">Password</label>
                <input type="password" className="form-control" ref="password"/>
              </div>
              <div className="form-group">
                <label htmlFor="confirmation" className="control-label">Confirmation</label>
                <input type="password" className="form-control" ref="confirmation"></input>
              </div>            
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
            <button type="submit" className="btn btn-primary">Sign up</button>
          </div>
          </form>
        </div>
      </div>
    </div>
  }
}