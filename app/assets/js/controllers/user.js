var User = require('../models/user');

function userController(app) {

  var el = app.$el.user = {
    form: {
      changeEmail: $('form.change-email')
    }
  };

  // update email address
  el.form.changeEmail.on('click', 'button[type="submit"]', function(e) {
    e.preventDefault();

    var user = new User( $(this).data('user-id') );
    var newEmail = el.form.changeEmail.find('input[name="email"]').val();
    var csrfToken = el.form.changeEmail.find('.csrf input').val();
    var data = { email: newEmail, _csrf: csrfToken };

    user.changeEmail(data, function(resp) {
      // if (resp.error)
      // TODO show update
      console.log(resp);
    });
  });

}

module.exports = userController;

