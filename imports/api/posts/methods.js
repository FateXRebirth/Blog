import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Posts } from './posts';

Meteor.methods({
    CreatePost : function(username, title, content) {
        check(username, String);
        check(title, String);
        check(content, String);
        Posts.insert({
            username,
            title,
            content,
            createAt: new Date()
        }, (error, result) => {
            return Posts.update({ username: username, title: title}, {$set: { _id: result }});
        })
    },
    EditPost : function(id, data) {
        return Posts.update( { _id: id }, {$set: {title: data.title, content: data.content }});
    },
    DeletePost : function(id) {
        Posts.remove( { _id: id } ,(error, result) => {
            if(error) return error;
            return result;
        }); 
    }
})