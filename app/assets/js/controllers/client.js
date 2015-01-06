var Client = require('../models/client');
var serialize = require('form-serialize');

function clientController(app) {

  var el = app.$el.client = {
    form: {
      create: $('form[name="createClient"]'),
      edit: $('form[name="editClient"]')
    }
  };

  /**
   * Update a client
   * @method: PUT
   */
  el.form.edit.on('submit', function(e) {
    e.preventDefault();

    var id = $(this).data('client-id');
    var data = serialize(this, { hash: true});
    data._csrf = $(this).find('.csrf input').val();

    var client = new Client(id)
      .update(id, data, function() {
        window.location.href = '/clients';
      });
  });

  /**
   * Delete a client
   * @method: DELETE
   */
  el.form.edit.on('click', '.delete-client', function(e) {
    e.preventDefault();

    var id = $(this).data('client-id');
    var data = { _csrf: el.form.edit.find('.csrf input').val() };

    var client = new Client(id)
      .destroy(id, data, function() {
        window.location.href = '/clients';
      });
  });

}

module.exports = clientController;

