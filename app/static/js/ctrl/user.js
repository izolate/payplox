import User from '../models/user';
import serialize from 'form-serialize';

export default (app) => {

  // create user object
    let userId = $('body').data('user-id');
    if (userId)
      app.user = new User(userId);

  // localized element cache
  let el = app.$el.user = {
    form: {
      pw: $('form[name="updatePassword"]'),
      email: $('form[name="updateEmail"]'),
      address: $('form[name="updateAddress"]'),
      payment: $('form[name="updatePayment"]')
    },
    delAddress: $('.delete-address'),
    delPayment: $('.delete-payment')
  };

  // update email address
  el.form.email.on('submit', function(e) {
    e.preventDefault();

    app.user.updateEmail({
      email: el.form.email.find('input[name="email"]').val(),
      _csrf: el.form.email.find('.csrf input').val()
    }, function(resp) {
      // if (resp.error)
      // TODO show update
      console.log(resp);
    });
  });

  // update password
  el.form.pw.on('submit', function(e) {
    e.preventDefault();

    app.user.updatePassword({
      currentPass: el.form.pw.find('input[name="currentPass"]').val(),
      newPass: el.form.pw.find('input[name="newPass"]').val(),
      _csrf: el.form.pw.find('.csrf input').val()
    }, function(resp) {
      // TODO handle it
      console.log(resp);
    });
  });

  // update address
  el.form.address.on('submit', function(e) {
    e.preventDefault();

    let address = serialize(this, { hash: true});
    app.user.updateAddress(address, function(resp) {
      // TODO handle it
      console.log(resp);
    });
  });

  // delete address
  el.delAddress.on('click', function() {
    let $elem = $(this);

    app.user.deleteAddress(
    $elem.data('address-id'),
    { _csrf: $elem.data('csrf-token') },
    function(resp) {
      console.log(resp);
    });
  });

  // update payment
  el.form.payment.on('submit', function(e) {
    e.preventDefault();

    let data = serialize(this, { hash: true });

    app.user.updatePayment(data, function(resp) {
      // TODO handle it
      console.log(resp);
    });
  });

  // delete a payment
  el.delPayment.on('click', function() {
    let $elem = $(this);
    let id = $elem.data('payment-id');
    let data = { _csrf: $elem.data('csrf-token') };

    app.user.deletePayment(id, data, function(resp) {
      console.log(resp);
    });
  });

}
