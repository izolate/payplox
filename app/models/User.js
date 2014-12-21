/**
 * User model
 */
var mongoose = require('mongoose');

// define schema
var schema = mongoose.Schema({
  email: String,
  password: String,
  name: String,
  created_at: {type: Date, default: Date.now}
});

// create model
var User = mongoose.model('User', schema);

module.exports = User;

