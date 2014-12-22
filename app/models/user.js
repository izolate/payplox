/**
 * User model
 */
var mongoose = require('mongoose');
var Client = require('./client');

// define schema
var schema = mongoose.Schema({
  email: String,
  password: String,
  name: String,
  created_at: {type: Date, default: Date.now},
  clients: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Client'
  }]
});

// create model
var User = mongoose.model('users', schema);

module.exports = User;

