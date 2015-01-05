var Base = require('./base');

var Client = Object.create(Base);

Client.prototype.init = function(id) {
  this._id = id;
};

/*
function Client(id) {
  this._id = id;
}


Base.sendRequest.call(Client.prototype);

Client.prototype.update = function(data, callback) {
  console.log(this);
};

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
*/


console.log(Client);

module.exports = Client.init;
