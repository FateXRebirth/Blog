import React from 'react';

export default class Login extends React.Component {
  render() {
    return <div className="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 className="modal-title" id="exampleModalLabel">Log In</h4>
          </div>
        <div className="modal-body">
          <form>
            <div className="form-group">
              <label for="username" className="control-label">Username</label>
              <input type="text" className="form-control" id="username"/>
            </div>
            <div className="form-group">
              <label for="password" className="control-label">Password</label>
              <input type="password" className="form-control" id="password"/>
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
          <button type="button" className="btn btn-primary">Log in</button>
        </div>
      </div>
    </div>
  </div>
  }
}