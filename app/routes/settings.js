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
  res.render('pages/settings', {
    page: 'user', message: req.flash('message')
  });
}
function putUser(req, res, next) {
  var user = User.findOne({ _id: req.user._id }, function(err, user) {
    if (err) next(err);

    user.changePassword({
      current: req.body.currentPass, new: req.body.newPass
    }, function(err, resp) {

      var message = err ? err.message : 'Success';
      req.flash('message', message);

      res.render('pages/settings', {
        page: 'user', message: req.flash('message')
      });
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
