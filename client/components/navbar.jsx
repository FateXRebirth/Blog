import React from 'react';
import Login from './login';
import Register from './register';
import * as users from './../api/users.js';

export default class Navbar extends React.Component {
  render() {
    return <div className="nav">
      <div className="nav-title">
        <ul>
          <a href="index"><img src="icons/1497280752_blogger.png"/></a>
          <li>Blog - A Blog you never seen before</li>
        </ul>
      </div>
      <div className="navbar">
        { users.checkLoggedIn()? 
        (<ul>          
          <li><a href="/">Home</a></li>          
          <li><a href="#">Log Out</a></li>              
        </ul>) :
        (<ul>          
          <li><a href="/">Home</a></li>
          <li><a href="#loginModal" data-toggle="modal">Log in</a></li><Login />
          <li><a href="#registerModal" data-toggle="modal">Sign Up</a></li><Register />         
        </ul>)}       
      </div>
    </div>
  }
}