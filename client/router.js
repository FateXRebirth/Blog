import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';

import { Home } from './components/home.jsx';
import { HelloWorld } from './components/helloworld.jsx';

FlowRouter.route('/home', {
    name: 'home',
    action() {
    mount(Home, {
      main: <HelloWorld/>,
    });
  },
})