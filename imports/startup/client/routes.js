import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';
import { mount } from 'react-mounter';
import React from 'react';

// Import needed templates
import '../../ui/layouts/body/body.js';
import '../../ui/pages/home/home.js';
import '../../ui/pages/not-found/not-found.js';

// Import layout 
import AppContainer from '../../ui/layouts/AppContainer.jsx';

// Import component 
import Login from '../../ui/components/login.jsx';
// import other component
import Navbar from '../../ui/components/navbar';
import Header from '../../ui/components/header';
import Footer from '../../ui/components/footer';
import Comment from '../../ui/components/comment';
import Intro from '../../ui/components/intro';
import Feature from '../../ui/components/feature';

// Set up all routes in the app
// FlowRouter.route('/', {
//   name: 'App.home',
//   action() {
//     BlazeLayout.render('App_body', { main: 'App_home' });
//   },
// });

// FlowRouter.notFound = {
//   action() {
//     BlazeLayout.render('App_body', { main: 'App_notFound' });
//   },
// };

// FlowRouter.route('/', {
//   name: 'root',
//   action() {
//     mount(MainLayout, {
//       content: <WelcomeComponent name="Arunoda" />
//     });
//   }
// })


FlowRouter.route('/', {
  name: 'root',
  action() {
    mount(AppContainer, {
      content : <Intro />
    })
  }
})

// FlowRouter.triggers.enter([cb1, cb2]);
// FlowRouter.triggers.exit([cb1, cb2]);

// // filtering
// FlowRouter.triggers.enter([trackRouteEntry], {only: ["home"]});
// FlowRouter.triggers.exit([trackRouteExit], {except: ["home"]});

// FlowRouter.route('/', {
//   triggersEnter: [function(context, redirect) {
//     redirect('/some-other-path');
//   }],
//   action: function(_params) {
//     throw new Error("this should not get called");
//   }
// });

// route def: /apps/:appId
// url: /apps/this-is-my-app

// var appId = FlowRouter.getParam("appId");
// console.log(appId); // prints "this-is-my-app"

// route def: /apps/:appId
// url: /apps/this-is-my-app?show=yes&color=red

// var color = FlowRouter.getQueryParam("color");
// console.log(color); // prints "red"

// route def: /apps/:appId
// url: /apps/this-is-my-app?show=yes&color=red

// var current = FlowRouter.current();
// console.log(current);

// prints following object
// {
//     path: "/apps/this-is-my-app?show=yes&color=red",
//     params: {appId: "this-is-my-app"},
//     queryParams: {show: "yes", color: "red"}
//     route: {pathDef: "/apps/:appId", name: "name-of-the-route"}
// }

// var pathDef = "/blog/:cat/:id";
// var params = {cat: "met eor", id: "abc"};
// var queryParams = {show: "y+e=s", color: "black"};

// var path = FlowRouter.path(pathDef, params, queryParams);
// console.log(path); // prints "/blog/met%20eor/abc?show=y%2Be%3Ds&color=black"

FlowRouter.route('/login', {
  action() {
    mount(AppContainer, { content: <Login />})
  }
});

FlowRouter.route('/blog/:postId', {
    action: function(params, queryParams) {
        console.log("Yeah! We are on the post:", params.postId);
        console.log(FlowRouter.current());
    }
});

FlowRouter.route('/user/:user_id', {
    // do some action for this route
    action: function(params, queryParams) {
        console.log("Params:", params);
        console.log("Query Params:", queryParams);
    },

    name: "<name for the route>" // optional
});

// FlowRouter.route('/home', {
//   // calls just before the action
//   triggersEnter: [trackRouteEntry],
//   action: function() {
//     // do something you like
//   },
//   // calls when we decide to move to another route
//   // but calls before the next route started
//   triggersExit: [trackRouteClose]
// });

FlowRouter.notFound = {
    // Subscriptions registered here don't have Fast Render support.
    subscriptions: function() {

    },
    action: function() {
      console.log("Not Found 404");
    }
};