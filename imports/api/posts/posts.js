// Definition of the posts collection
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Posts = new Mongo.Collection('posts');

Meteor.publish('posts.all', function () {
  return Posts.find();
});