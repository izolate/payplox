var help = require('app/controllers/helpers');
var User = require('app/models/user');

function settings(req, res) {
  res.render('pages/settings');
}

/**
 * Settings page
 * @method: GET
 */
function getSettings(req, res) {
  res.render('pages/settings', {
    message: req.flash('message')
  });
}

/**
 * Change email address
 *  @method: PUT
 */
function changeEmail(req, res, next) {
  // TODO find if email exists already
  var query = User.findOne({ _id: req.body.email }, function(err, user) {
    if (err) next(err);
    if (user) {
      req.flash('message', 'That email has already been registered');
      res.render('pages/settings', { message: req.flash('message') });
    } else {
      // save it
    }
  });

  var user = User.findOne({ _id: req.user._id }, function(err, user) {
    if (err) next(err);

    user.changeEmail(req.body.email, function(err, resp) {
      if (err) next(err);
      // TODO send verification email
      res.render('pages/settings');
    });
  });
}

/**
 * Change password
 *  @method: POST
 *  TODO: make it PUT
 */
function changePassword(req, res, next) {
  var user = User.findOne({ _id: req.user._id }, function(err, user) {
    if (err) next(err);

    user.changePassword({
      current: req.body.currentPass, new: req.body.newPass
    }, function(err, resp) {

      var message = err ? err.message : 'Success';
      req.flash('message', message);

      res.render('pages/settings', {
        message: req.flash('message')
      });
    });
  });
}
function setup(app, passport) {
  app.get('/settings', help.protect, settings);
  app.put('/settings/email', help.protect, changeEmail);
  app.post('/settings/password', help.protect, changePassword);
}
module.exports = setup;
