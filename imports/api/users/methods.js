import { check } from 'meteor/check';
import { Meteor } from 'meteor/meteor';
import { Users } from './users';

Meteor.methods({
    CreateUser : function(id, username, email, password) {
        check(id, String);
        check(username, String);
        check(email, String);
        check(password, String);
        try {
            return Users.insert( { id: id, username: username, email: email, password: password, createAt: new Date() });
        } catch (e) {
            console.log(e);
            throw new Meteor.Error("Can not create");
        }
    },
    EditUser : function(id, data) {
        check(id, String);
        check(data, Object);
        try {
            return Users.update( { id: id }, { $set: { username: data.username, password: data.password }}, {});
        } catch (e) {
            throw new Meteor.Error("Can not edit");
        }
    },
    CheckEmail : function(email) {
        check(email, String);
        return Users.findOne( { email: email } );
    },
    GetUser : function(id) {
        check(id, String);
        return Users.findOne( { id: id } );
    }
})