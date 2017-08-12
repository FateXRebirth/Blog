import { Meteor } from 'meteor/meteor';
import StubCollections from 'meteor/hwillson:stub-collections';
import { assert, should, expect, be } from 'meteor/practicalmeteor:chai';
import { describe, it, before } from 'meteor/practicalmeteor:mocha';
import { Users } from './users.js';
import './methods.js';

if (Meteor.isServer) {

    describe('User methods', function () {
        beforeEach( () => {
            StubCollections.stub(Users);
            Meteor.call('CreateUser', 'admin', 'admin@admin.com', '123456')
        })
        afterEach( () => {
            StubCollections.restore();
        })

        it('can add a new user', () => {
            assert.equal(Users.find().count(), 1);
        });
        
        it('can edit user data with exist user', () => {
            var id = Users.findOne({ username: 'admin'}).id;
            expect(Meteor.call('EditUser', id, {username: 'admin2', password: '1234567'})).to.equal(1);
            expect(Users.findOne({ id: id }).username).to.equal('admin2');
            expect(Users.findOne({ id: id }).password).to.equal('1234567');        
        });

        it('can not edit user data with does not exist user', () => {
            const promise = new Promise((resolve, reject) => {
                Meteor.call('EditUser', "fake_id", { username: 'admin2', password: '1234567'}, (error, result) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(result);
                    }
                });
            });
            return promise.then( function(result) {
                assert.equal(result, 0);
            });            
        });

        it('can check exist email with exist user', () => {
            Meteor.call('CheckEmail', 'admin@admin.com', (error, result) => {
                try {
                    expect(result.username).to.equal('admin');
                    expect(result.email).to.equal('admin@admin.com');
                    done();
                } catch (error) { done(error) }
            })        
        });

        it('can not check exist email with does not exist user', () => {
            Meteor.call('CheckEmail', 'admin1@admin.com', (error, result) => {
                try {
                    expect(result).to.be.undefined;
                    done();
                } catch (error) { done(error) }
            })
        });

        it('can find user data with exist user', (done) => {
            Meteor.call('GetUser', 'admin', (error, result) => {
                try {
                    expect(result.username).to.equal('admin');
                    expect(result.email).to.equal('admin@admin.com');
                    expect(result.password).to.equal('123456');
                    done();
                } catch (error) { done(error); }
            });
        });

        it('can not find user data with does not exist user', () => {
            const promise = new Promise((resolve, reject) => {
                Meteor.call('GetUser', 'admin2', (error, result) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(result);
                    }
                });
            });
            return promise.then( function(result) {
                assert.equal(result, undefined);
            });
        });
    });
}
