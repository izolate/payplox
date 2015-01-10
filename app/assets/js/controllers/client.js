import Client from '../models/client';
import serialize from 'form-serialize';

export default function clientCtrl(app) {

  let el = app.$el.client = {
    form: {
      create: $('form[name="createClient"]'),
      edit: $('form[name="editClient"]')
    }
  };

  // update a client
  el.form.edit.on('submit', function(e) {
    e.preventDefault();

    let id = $(this).data('client-id');
    let data = serialize(this, { hash: true});
    data._csrf = $(this).find('.csrf input').val();

    let client = new Client(id)
      .update(id, data, function() {
        window.location.href = '/clients';
      });
  });

  // delete a client
  el.form.edit.on('click', '.delete-client', function(e) {
    e.preventDefault();

    let id = $(this).data('client-id');
    let data = { _csrf: el.form.edit.find('.csrf input').val() };

    let client = new Client(id)
      .destroy(id, data, function() {
        window.location.href = '/clients';
      });
  });

}
