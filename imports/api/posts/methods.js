import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Posts } from './posts';

Meteor.methods({
    CreatePost : function(id, username, title, content) {
        check(username, String);
        check(title, String);
        check(content, String);
        try {
            return Posts.insert({ id: id, username: username, title: title, content: content, createAt: new Date()});
        } catch (e) {
            throw new Meteor.Error('Can not create');
        }
    },
    EditPost : function(id, data) {
        check(id, String);
        check(data, Object);
        try {
            return Posts.update({ id: id }, { $set: { title:data.title, content: data.content } });
        } catch(e) {
            throw new Meteor.Error('Can not edit');
        }
    },
    DeletePost : function(id) {
        check(id, String);
        try {
            return Posts.remove({ id: id } );
        } catch(e) {
            throw new Meteor.Error('Can not delete');
        }
    },
    GetPost: function(id) {
        try {
            return Posts.findOne( { id: id });
        } catch(e) {
            throw new Meteor.Error('Can not get post');
        }
    }
})