import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Posts } from './posts';

Meteor.methods({
    CreatePost : function(id, username, title, outline, content) {
        check(username, String);
        check(title, String);
        check(outline, String);
        check(content, String);
        const currentDate = new Date();
        let date = currentDate.getDate().toString();
        let month;
        switch (currentDate.getMonth()) {
            case 1:
                month = "January";
                break;
            case 2:
                month = "February";
                break;
            case 3:
                month = "March";
                break;
            case 4:
                month = "April";
                break;
            case 5:
                month = "May";
                break;
            case 6:
                month = "June";
                break;
            case 7:
                month = "July";
            case 8:
                month = "August";
            case 9:
                month = "September";
            case 10:
                month = "October";
            case 11:
                month = "November";
            case 12:
                month = "December";
        }
        month = month.toString();
        let year = currentDate.getFullYear().toString();
        let createAt = "Published " + date + " " + month + " " + year;

        try {
            return Posts.insert({ id: id, username: username, title: title, outline: outline, content: content, createAt: createAt });
        } catch (e) {
            throw new Meteor.Error('Can not create');
        }
    },
    EditPost : function(id, data) {
        check(id, String);
        check(data, Object);
        try {
            return Posts.update({ id: id }, { $set: { title:data.title, outline: data.outline, content: data.content } });
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
    GetPost : function(id) {
        try {
            return Posts.findOne( { id: id });
        } catch(e) {
            throw new Meteor.Error('Can not get post');
        }
    },
    GetPostUsingName : function(username) {
        try {
            return Posts.find( { username: username }).fetch();
        } catch(e) {
            throw new Meteor.Error('Can not get posts using username');
        }
    }
})