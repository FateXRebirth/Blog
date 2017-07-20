import { check } from 'meteor/check';
import { Meteor } from 'meteor/meteor';
import { Users } from './users';
import { Session } from 'meteor/session'

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
    Login : function({data}) {
        Session.set('currentUser', data);
    },
    Logout : function() {
        delete Session.keys['currentUser'];
    },
    LoggingIn : function () {
        return ( Session.get('currentUser') == null)? false : true;
    },
    CurrentUser : function() {
        return Session.get('currentUser');
    }
})