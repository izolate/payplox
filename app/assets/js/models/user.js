
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
 * Change email address
 * @method: PUT
 */
User.prototype.changeEmail = function(data, callback) {
  this.sendRequest({
    method: 'put',
    url: '/user/email',
    data: data,
    callback: callback
  });
};

/**
 * Change password
 * @method: PUT
 */
User.prototype.changePassword = function(data, callback) {
  this.sendRequest({
    method: 'put',
    url: '/user/password',
    data: data,
    callback: callback
  });
};

module.exports = User;
