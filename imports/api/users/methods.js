import { check } from 'meteor/check';
import { Meteor } from 'meteor/meteor';
import { Users } from './users';

Meteor.methods({
    CreateUser : function(username, email, password) {
        check(username, String);
        check(email, String);
        check(password, String);
        var id;
        try {
            id = Users.insert( { username: username, email: email, password: password, createAt: new Date() });
        } catch (e) {
            console.log(e);
            throw new Meteor.Error("Can not create");
        }
        
        try {
            return Users.update( { email: email }, { $set: { id: id }}, {});
        } catch (e) {
            console.log(e);
            throw new Meteor.Error("Can not update");
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
    GetUser : function(username) {
        check(username, String);
        return Users.findOne( { username : username } );
    }
})