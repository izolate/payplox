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
  app.post('/settings/password', help.protect, changePassword);
}
module.exports = setup;
