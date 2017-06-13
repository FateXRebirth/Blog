import React from 'react';
import Navbar from './navbar'

export default class Header extends React.Component {
  render() {
    return <div className="header">
      <Navbar />
    </div>
  }
}