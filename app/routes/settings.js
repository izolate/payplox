var help = require('app/controllers/helpers');
var User = require('app/models/user');

function settings(req, res) {
  res.render('pages/settings', { page: 'settings' });
}

/**
 * User settings - password/email
 * @method: GET, PUT
 */
function getUser(req, res) {
  res.render('pages/settings', { page: 'user' });
}
function putUser(req, res, next) {
  var user = User.findOne({ _id: req.user._id }, function(err, user) {
    if (err) next(err);

    user.changePassword({
      current: req.body.currentPass, new: req.body.newPass
    }, function(err, resp) {
      if (err)
        console.log(err);
      else
        console.log(resp);
    });
  });
}

function setup(app, passport) {
  app.get('/settings', help.protect, settings);

  // user
  app.get('/settings/user', help.protect, getUser);
  app.post('/settings/user', help.protect, putUser);
}
module.exports = setup;
