import React from 'react';

export default class Register extends React.Component {
  render() {
    return <div className="modal fade" id="registerModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 className="modal-title" id="exampleModalLabel">Sign Up</h4>
          </div>
          <div className="modal-body">
            <form>
              <div className="form-group">
                <label for="username" className="control-label">Username</label>
                <input type="text" className="form-control" id="username"/>
              </div>
              <div className="form-group">
                <label for="email" className="control-label">E-mail</label>
                <input type="text" className="form-control" id="email"/>
              </div>
              <div className="form-group">
                <label for="password" className="control-label">Password</label>
                <input type="password" className="form-control" id="password"/>
              </div>
              <div className="form-group">
                <label for="confirmation" className="control-label">Confirmation</label>
                <input type="password" className="form-control" id="confirmation"></input>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary">Sign up</button>
          </div>
        </div>
      </div>
    </div>
  }
}