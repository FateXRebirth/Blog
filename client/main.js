import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';
import HelloWorld from './components/helloworld.jsx'

Meteor.startup(() => {
  render(<Home />, document.getElementById('app'));
});