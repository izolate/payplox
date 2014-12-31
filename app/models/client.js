/**
 * Client model
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var User = require('./user');

// define schema
var schema = new Schema({
  _user: { type: Schema.Types.ObjectId, ref: 'User' },
  name: { type: String, required: true },
  company_number: String,
  address: {
    street: { type: String, required: true },
    town: { type: String, required: true },
    county: { type: String, required: true },
    postcode: { type: String, required: true },
    country: { type: String, required: true }
  },
  created_at: {type: Date, default: Date.now},
  contact: {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: String
  }
});

// create model
var Client = mongoose.model('clients', schema);

module.exports = Client;

