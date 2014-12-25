
function Client(id) {
  this._id = id;
}

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
