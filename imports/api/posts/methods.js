import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Posts } from './posts';

Meteor.methods({
    CreatePost : function(username, title, content) {
        check(username, String);
        check(title, String);
        check(content, String);
        var id = Posts.insert({ username: username, title: title, content: content, createAt: new Date()});
        try {
            return Posts.update( { username: username, title: title }, { $set: { id: id }});
        } catch (e) {
            throw new Meteor.Error('Can not update');
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
    }
})