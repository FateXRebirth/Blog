import { check } from 'meteor/check';
import { Meteor } from 'meteor/meteor';
import { Users } from './users';

Meteor.methods({
    CreateUser : function(username, email, password) {
        check(username, String);
        check(email, String);
        check(password, String);
        Users.insert({
            username,
            email,
            password,
            createAt: new Date(), 
        }, (error, result) => {
            return Users.update({ username: username }, {$set: { _id: result }});
        })
    },
    EditUser : function(id, data) {
        return Users.update( { _id: id }, { username: data.username, email: data.email, password: data.password });
    },
    CheckEmail : function(email) {
        check(email, String);
        
        return Users.findOne( { email: email } );
    },
    GetUser : function(username) {
        
        return Users.findOne( { username : username } );
    }
})