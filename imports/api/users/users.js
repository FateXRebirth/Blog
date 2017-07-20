// Definition of the users collection
import { Mongo } from 'meteor/mongo';

export const Users = new Mongo.Collection('users');

// Users.allow({
//   insert: () => false,
//   update: () => false,
//   remove: () => false,
// });

// Users.deny({
//   insert: () => true,
//   update: () => true,
//   remove: () => true,
// });

