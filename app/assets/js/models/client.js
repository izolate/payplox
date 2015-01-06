var Base = require('./base');

function Client(id) {
  Base.call(this); // call super constructor
  this._id = id;
}

// extend Base model
Client.prototype = Object.create(Base.prototype);
Client.prototype.constructor = Client;

/**
 * Update a client record
 * @method: PUT
 */
Client.prototype.update = function(data, callback) {
  console.log(this);
};

/**
 * Delete a client
 * @method: DELETE
 */
Client.prototype.destroy = function(data, callback) {
  $.ajax({
    type: 'delete',
    url: '/clients/'+this._id,
    data: data,
    success: function(resp) {
      callback();
    }
  });
};

module.exports = Client;
