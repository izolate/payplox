/**
 * base model
 */
function Base(){}

/**
 * Send an AJAX request
 */
Base.prototype.sendRequest = function(config) {
  $.ajax({
    type: config.method,
    url: config.url,
    data: config.data,
    success: function(resp) {
      config.callback(resp);
    }
  });
};

module.exports = Base;
