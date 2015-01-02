var User = require('../models/user');

function userController(app) {

  // create user object
  app.events.on('domready', function() {
    var userId = $('body').data('user-id');
    if (userId)
      app.user = new User(userId);
  });

  // localized element cache
  var el = app.$el.user = {
    form: {
      pw: $('form[name="updatePassword"]'),
      email: $('form[name="updateEmail"]')
    }
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

}

module.exports = userController;

