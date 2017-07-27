// import { FlowRouter } from 'meteor/kadira:flow-router';
// import { BlazeLayout } from 'meteor/kadira:blaze-layout';
// import { Session } from 'meteor/session'
// import { mount } from 'react-mounter';
// import React from 'react';

// // Import needed templates
// import '../../ui/layouts/body/body.js';
// import '../../ui/pages/home/home.js';
// import '../../ui/pages/not-found/not-found.js';

// // Import layout 
// import AppContainer from '../../ui/layouts/AppContainer.jsx';

// // import other component
// import Navbar from '../../ui/components/navbar';
// import Header from '../../ui/components/header';
// import Footer from '../../ui/components/footer';
// import Comment from '../../ui/components/comment';
// import Intro from '../../ui/components/intro';
// import Feature from '../../ui/components/feature';
// import Login from '../../ui/components/login.jsx';
// import Register from '../../ui/components/register.jsx';
// import Main from '../../ui/components/main.jsx';

// // FlowRouter.triggers.enter([cb1, cb2]);
// // FlowRouter.triggers.exit([cb1, cb2]);

// // // filtering
// // FlowRouter.triggers.enter([trackRouteEntry], {only: ["home"]});
// // FlowRouter.triggers.exit([trackRouteExit], {except: ["home"]});

// FlowRouter.route('/', {
//   name: 'index',
//   action() {
//     mount(AppContainer, {
//       content : <Intro />
//     })
//   }
// })

// FlowRouter.route('/login', {
//   name: 'login',
//   action(params, queryParams) {
//     mount(AppContainer, {
//       content : <Login />
//     })
//   }
// })

// FlowRouter.route('/logout', {
//   name: 'logout',
//   action() {        
//     localStorage.clear();         
//     return FlowRouter.redirect('/');
//   }
// })

// FlowRouter.route('/register', {
//   name: 'register',
//   action() {
//     mount(AppContainer, { 
//       content: <Register />
//     })
//   }
// });
 
// function loginCheck(context, redirect) {    
//     if(!localStorage.getItem('currentUser')) {
//         console.log("You have to login first");
//         redirect('/login')
//     }  
//   }

// let authGroup = FlowRouter.group({  
//   triggersEnter: [loginCheck]
// });

// authGroup.route('/:user', {
//   name: 'user', 
//   action(params, queryParams) {
//     mount(AppContainer, {
//         currentUser: params.user, 
//     })
//   }
// });

// authGroup.route('/:user/:service', {
//   name: 'blog', 
//   action(params, queryParams) {
//     mount(AppContainer, {
//         currentUser: params.user, 
//         service: params.service,
//     })
//   }
// });

// FlowRouter.notFound = {
//     name: 'NotFound',
//     // Subscriptions registered here don't have Fast Render support.
//     subscriptions: function() {

//     },
//     action: function() {
//         console.log("Not Found 404");
//     }
// };