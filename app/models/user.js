/**
 * User model
 */
var mongoose = require('mongoose');
var Client = require('./client');
var bCrypt = require('bcrypt-nodejs');

// define schema
var schema = mongoose.Schema({
  email: String,
  password: String,
  name: String,
  created_at: {type: Date, default: Date.now},
  address: [{
    street: String,
    town: String,
    county: String,
    postcode: String,
    country: String
  }],
  clients: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Client'
  }]
});


// compares password hash
schema.methods.validPassword = function(password){
  return bCrypt.compareSync(password, this.password);
};

// Generates hash using bCrypt
schema.methods.createHash = function(password) {
  return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
};

// change email
schema.methods.changeEmail = function(email, cb) {
  this.email = email;
  return this.save(cb);
};

// change password
schema.methods.changePassword = function(pass, cb) {
  if ( this.validPassword(pass.current) ) {
    this.password = this.createHash(pass.new);
    return this.save(cb);
  } else {
    return cb(new Error('Invalid password'), null);
  }
};

// create model
var User = mongoose.model('users', schema);

module.exports = User;

