
function User(id) {
  this._id = id;
}

/**
 * Send an AJAX request
 */
User.prototype.sendRequest = function(config) {
  $.ajax({
    type: config.method,
    url: config.url,
    data: config.data,
    success: function(resp) {
      config.callback(resp);
    }
  });
};

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

module.exports = User;
