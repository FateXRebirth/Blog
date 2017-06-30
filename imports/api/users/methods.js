import { check } from 'meteor/check';
import { Meteor } from 'meteor/meteor';
import { Users } from './users';

Meteor.methods({
    CreateUser : function(username, email, password) {
        check(username, String);
        check(email, String);
        check(password, String);

        return Users.insert({
            username,
            email,
            password,
            createAt: new Date(),
        })
    },
    CheckEmail : function(email) {
        check(email, String);
        
        return Users.find( { email : email } ).fetch();        
    }
})