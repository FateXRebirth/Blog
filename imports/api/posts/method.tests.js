import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random';
import StubCollections from 'meteor/hwillson:stub-collections';
import { assert, should, expect, be } from 'meteor/practicalmeteor:chai';
import { describe, it, before } from 'meteor/practicalmeteor:mocha';
import { Posts } from './posts';
import './methods';
import './publication';

if (Meteor.isServer) {

    describe('Post methods', function() {

        beforeEach( () => {
            StubCollections.stub(Posts);
            Meteor.call('CreatePost', Random.id(), 'admin', 'title', 'content');
        })

        afterEach( () => {
            StubCollections.restore();
        })

        it('can create a new post', () => {
            assert.equal(Posts.find({}).count(), 1);
        })
            
        it('can edit post with exist post', () => {
            var id = Posts.findOne({title: 'title'}).id;
            Meteor.call('EditPost', id, { title: 'title2', content: 'content2'})
            var result = Posts.findOne({ id: id });
            expect(result.title).to.equal('title2');
            expect(result.content).to.equal('content2');
        })

        it('can not edit post with does not exist post', () => {        
            const promise = new Promise((resolve, reject) => {
                Meteor.call('EditPost', "fake_id", { title: 'title2', content: 'content2'}, (error, result) => {
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
        })        
            
        it('can delete post with exist post', () => {
            var id = Posts.findOne({title: 'title'}).id;
            expect(Meteor.call('DeletePost', id)).to.equal(1);
            expect(Posts.findOne( { id: id })).to.be.undefined;         
        })

        it('can not delete post with does not exist post', () => {
            expect(Meteor.call('DeletePost', "fake_id")).to.equal(0);
            const promise = new Promise((resolve, reject) => {
                Meteor.call('DeletePost', "fake_id", (error, result) => {
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
        })

        it('can get post with exist post', (done) => {
            var id = Posts.findOne( { title: 'title' }).id;
            Meteor.call('GetPost', id, (error, result) => {
                try {
                    expect(result.title).to.equal('title');
                    expect(result.content).to.equal('content');
                    done()
                } catch (error) { done(error) }
            })
        })

        it('can not get post with does not exist post', () => {
            expect(Posts.findOne( { id: 'fake_id' })).to.be.undefined;
        })
    })
}