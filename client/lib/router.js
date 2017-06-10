import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount, withOptions } from 'react-mounter';

import Layout from './../components/layout.jsx';
import Header from './../components/header.jsx';
import Navbar from './../components/navbar.jsx';
import Intro from './../components/intro.jsx'
import Info from './../components/info.jsx'
import Footer from './../components/footer.jsx';

const mounter = withOptions({
    rootId: 'react-layout'}, mount);

FlowRouter.route('/blog/:postId', {
    // do some action for this route
    action: function(params, queryParams) {
        console.log("Params:", params);
        console.log("Query Params:", queryParams);
    },

    name: "<name for the route>" // optional
});

//FlowRouter.go('/blog/my-post?comments=on&color=dark');

FlowRouter.route('/', {
    name: 'home',
    action() {
        mounter(Layout, {
            header: <Header />,
            navbar: <Navbar />,
            intro: <Intro />,
            info: <Info />,
            footer: <Footer />
        });
    }
})

FlowRouter.route('/login', {
    name: 'login',
    action() {
        mounter(Layout, {
            content: <Login />,
        });
    },
})

FlowRouter.route('/register', {
    name: 'register',
    action() {
        mounter(Layout, {
            content: <Register />,
        });
    },
})

FlowRouter.notFound = {
    // Subscriptions registered here don't have Fast Render support.
    subscriptions: function() {

    },
    action: function() {
        redirect('/')
    }
};