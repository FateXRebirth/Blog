import { Meteor } from 'meteor/meteor';
import { Posts } from '../posts';

Meteor.publish('posts.all', function (username) {
    return Posts.find({ username: username });
});

