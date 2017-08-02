import { check } from 'meteor/check';
import { Meteor } from 'meteor/meteor';
import { Users } from './users';

Meteor.methods({
    CreateUser : function(username, email, password) {
        check(username, String);
        check(email, String);
        check(password, String);
        // try {
        //     if (!this.userId) {
        //         throw new Meteor.Error('500', 'Must be logged in to add new tacos.');
        //     }
        //     return Tacos.insert(taco);
        // } catch (exception) {
        //     throw new Meteor.Error('500', exception.message);
        // }
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
    },
    GetUser : function(username) {
        
        return Users.find( { username : username } ).fetch();
    }
})