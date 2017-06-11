import React from 'react';

export default class Info extends React.Component {
  render() {
    return <div className="info container-fluid">
      <div className="row">
        <div className="col-md-2 col-md-offset-2">                
          <ul>            
            <h3>ABOUT</h3>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Docs</a></li>          
          </ul>
        </div>
        <div className="col-md-2">          
          <ul>
            <h3>CONNECT</h3>
            <li><a href="#">Community</a></li>
            <li><a href="#">Subscribe</a></li>
            <li><a href="#">Email</a></li>            
          </ul>
        </div>
        <div className="col-md-2">          
          <ul>
            <h3>CONTACT</h3>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Github</a></li>       
          </ul>
        </div>        
      </div>
    </div>
  }
}