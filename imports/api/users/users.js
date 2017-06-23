// Definition of the users collection
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Users = new Mongo.Collection('users');

Meteor.methods({
    'users.create'(username, email, passowrd) {
        check(username, String);
        check(email, String);
        check(passowrd, String);

        return Users.insert({
            username,
            email,
            passowrd,
            createAt: new Date(),
        })
    }
})

Meteor.publish('users.all', function () {
  return Users.find();
});