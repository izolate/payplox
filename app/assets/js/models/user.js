var Base = require('./base');

function User(id) {
  Base.call(this); // call super constructor
  this._id = id;
}

// extend Base model
User.prototype = Object.create(Base.prototype);
User.prototype.constructor = User;

/**
 * Update email address
 * @method: PUT
 */
User.prototype.updateEmail = function(data, callback) {
  this.sendRequest({
    method: 'put',
    url: '/user/email',
    data: data,
    callback: callback
  });
};

/**
 * Update password
 * @method: PUT
 */
User.prototype.updatePassword = function(data, callback) {
  this.sendRequest({
    method: 'put',
    url: '/user/password',
    data: data,
    callback: callback
  });
};

/**
 * Update address
 * @method: PUT
 */
User.prototype.updateAddress = function(data, callback) {
  this.sendRequest({
    method: 'put',
    url: '/user/address',
    data: data,
    callback: callback
  });
};

/**
 * Delete address
 * @method: DELETE
 */
User.prototype.deleteAddress = function(id, data, callback) {
  this.sendRequest({
    method: 'delete',
    url: '/user/address/'+id,
    data: data,
    callback: callback
  });
};

module.exports = User;
