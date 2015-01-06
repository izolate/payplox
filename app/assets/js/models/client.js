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
Client.prototype.destroy = function(id, data, callback) {
  this.sendRequest({
    method: 'delete',
    url: '/clients/'+id,
    data: data,
    callback: callback
  });
};

module.exports = Client;
