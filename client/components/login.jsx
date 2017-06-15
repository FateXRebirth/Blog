import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';

export default class Login extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      error: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();    
    let email = this.refs.email.value;
    let password = this.refs.password.value;
    Meteor.loginWithPassword(email, password, (err) => {
      if(err){
        this.setState({
          error: err.reason
        });
      } else {
        console.log("submitted");
        $('#loginModal').modal('hide') 
        FlowRouter.go('');                      
      }
    });
  }

  render() {
    const error = this.state.error;
    return <div className="modal fade" id="loginModal" role="dialog" aria-labelledby="exampleModalLabel">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 className="modal-title" id="exampleModalLabel">Log In</h4>
          </div>
        <form onSubmit={this.handleSubmit}>
        <div className="modal-body">
          { error.length > 0 ?
                <div className="alert alert-danger fade in">{error}</div>
                :''}
            <div className="form-group">
              <label htmlFor="email" className="control-label">E-mail</label>
              <input type="text" className="form-control" ref="email"/>
            </div>
            <div className="form-group">
              <label htmlFor="password" className="control-label">Password</label>
              <input type="password" className="form-control" ref="password"/>
            </div>          
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
          <button type="submit" className="btn btn-primary">Log in</button>
        </div>
        </form>
      </div>
    </div>
  </div>
  }
}