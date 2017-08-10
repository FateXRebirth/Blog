import { Meteor } from 'meteor/meteor';
import { assert } from 'meteor/practicalmeteor:chai';
import { Users } from './users.js';
import './methods.js';

if (Meteor.isServer) {
  describe('users methods', function () {

    it('can add a new user', function () {
        Users.remove({})
        Meteor.call('CreateUser', 'test1', 'test1@example.com', '123456');
        assert.equal(Users.find().count(), 1);
    });

    describe('can find User data', function () {
        it('with exist User', (done) => {
           
        });
        it('with does not exist User', () => {

        });
    });

    describe('can check exist email', function () {
        it('with exist User', () => {
            
        });
        it('with does not exist User', () => {

        });
    });
  });
}
