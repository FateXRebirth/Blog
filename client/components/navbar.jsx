import React from 'react';

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
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Login</a></li>
          <li><a href="#">SignUp</a></li>
        </ul>
      </div>
    </div>
  }
}