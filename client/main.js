import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';
import Layout from './components/layout.jsx';

Meteor.startup(() => {
  render(<Layout />, document.getElementById('react-layout'));
});