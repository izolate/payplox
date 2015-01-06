var Client = require('../models/client');

function clientController(app) {

  var el = app.$el.client = {
    form: $('.client-form')
  };

  // delete a client
  el.form.on('click', '.delete-client', function(e) {
    e.preventDefault();

    var id = $(this).data('client-id');
    var data = { _csrf: el.form.find('.csrf input').val() };

    var client = new Client(id)
      .destroy(id, data, function() {
        window.location.href = '/clients';
      });
  });

}

module.exports = clientController;

