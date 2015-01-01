
function User(id) {
  this._id = id;
}

User.prototype.changeEmail = function(data, cb) {
  $.ajax({
    type: 'put',
    url: '/user/email',
    data: data,
    success: function(resp) {
      cb(resp);
    }
  });
};

module.exports = User;
