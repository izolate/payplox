var util = require('util');
var config = require('./config.js');
var mongoose = require('mongoose');

var db, url;

url = util.format('%s%s:%d/%s',
  config.db.protocol, config.db.host,
  config.db.port, config.db.collection
);

exports.connect = function() {
  if (!db)
    db = mongoose.connect(url);

  return db;
};
