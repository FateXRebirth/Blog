import { assert } from 'meteor/practicalmeteor:chai';
import { Posts } from '../posts';
import { PublicationCollector } from 'meteor/johanbrook:publication-collector';
import './publication';

describe('Post publications', function () {
    beforeEach(function () {
        Posts.remove({});
        Posts.insert({
            username: 'test',
            title: 'test_title',
            content: 'test_content',
        });
        Posts.insert({
            username: 'test2',
            title: 'test_title2',
            content: 'test_content2',
        });
    });

    it('should get all posts of user', function (done) {
        const collector = new PublicationCollector();
        collector.collect('posts.all', 'test', (collections) => {
            assert.equal(collections.posts.length, 1);
            done();
        });
    });
});
