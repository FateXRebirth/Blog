import { Meteor } from 'meteor/meteor';
import StubCollections from 'meteor/hwillson:stub-collections';
import { assert, should, expect, be } from 'meteor/practicalmeteor:chai';
import { describe, it, before } from 'meteor/practicalmeteor:mocha';
import { Posts } from './posts';
import './methods';

if (Meteor.isServer) {

    describe('Post methods', function() {

        beforeEach( () => {
            StubCollections.stub(Posts);
            Meteor.call('CreatePost', 'admin', 'title', 'content');
        })

        afterEach( () => {
            StubCollections.restore();
        })

        it('can create a new post', () => {
            assert.equal(Posts.find({}).count(), 1);
        })
            
        it('can edit post with exist post', () => {
            var id = Posts.findOne({title: 'title'})._id;
            Meteor.call('EditPost', id, { title: 'title2', content: 'content2'})
            expect(Posts.findOne({ _id: id }).title).to.equal('title2');
            expect(Posts.findOne({ _id: id }).content).to.equal('content2');
        })

        it('can not edit post with does not exist post', () => {
            Meteor.call('EditPost', "fake_id", { title: 'title2', content: 'content2'}, (error, result) => {
                expect(error).to.throw();
            })
        })        
            
        it('can delete post with exist post', () => {
            var id = Posts.findOne({title: 'title'})._id;
            Meteor.call('DeletePost', id, );
            expect(Posts.findOne( { _id: id })).to.not.exist;            
        })

        it('can not delete post with does not exist post', () => {
            Meteor.call('EditPost', "fake_id", (error, result) => {
                expect(error).to.throw();
            })
        })
    })
}