import { check } from 'meteor/check';
import { Meteor } from 'meteor/meteor';
import { Users } from './users';

Meteor.methods({
    CreateUser : function(id, username, email, password) {
        check(id, String);
        check(username, String);
        check(email, String);
        check(password, String);

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
        let createAt = "Created " + date + " " + month + " " + year;

        try {
            return Users.insert( { id: id, username: username, email: email, password: password, createAt: createAt });
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