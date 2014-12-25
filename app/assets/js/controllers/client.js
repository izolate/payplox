var Client = require('../models/client');

function clientController(app) {

  var el = app.$el.client = {
    form: $('.client-form')
  };

  // delete a client
  el.form.on('click', '.delete-client', function(e) {
    e.preventDefault();

    var client = new Client( $(this).data('client-id') );
    var csrfToken = el.form.find('.csrf input').val();

    client.destroy({ _csrf: csrfToken }, function() {
      window.location.href = '/clients';
    });
  });

}

module.exports = clientController;

