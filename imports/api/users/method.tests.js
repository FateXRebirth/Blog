import { Meteor } from 'meteor/meteor';
import { assert, should, expect, be } from 'meteor/practicalmeteor:chai';
import { describe, it, before } from 'meteor/practicalmeteor:mocha';
import { Users } from './users.js';
import './methods.js';

// function wrap(done, cb) {
//    return (...args) => {
//       try { return cb(...args); } catch (e) { done(e); }
//    }
// }

// it('Should return else', () => {
//   Meteor.call('somthing.else', 'else', wrap(done, (err, res) => {
//     chai.assert.equal(res, 'somthingelse', 'should be else');
//   }));
// });

if (Meteor.isServer) {
  describe('users methods', function () {

    it('can add a new user', function () {
        Users.remove({})
        Meteor.call('CreateUser', 'test1', 'test1@example.com', '123456');
        assert.equal(Users.find().count(), 1);
    });

    describe('can find User data', function () {
        it('with exist User', (done) => {
            Meteor.call('GetUser', 'test1', (error, result) => {
                try {
                    expect(result.length).to.equal(1);
                    done();
                } catch (error) { done(error); }
            });
        });
        it('with does not exist User', () => {
            const promise = new Promise((resolve, reject) => {
                Meteor.call('GetUser', 'test2', (error, result) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(result);
                    }
                });
            });
            return promise.then( function(result) {
                expect(result.length).to.equal(0);
            });
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
