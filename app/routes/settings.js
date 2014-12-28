var help = require('app/controllers/helpers');
var User = require('app/models/user');
var countries = require('country-list')();

function settings(req, res) {
  res.render('pages/settings', { page: 'settings' });
}

/**
 * Profile settings - password/email
 * @method: GET, PUT
 */
function getProfile(req, res) {
  res.render('pages/settings', {
    page: 'profile', message: req.flash('message')
  });
}
function putProfile(req, res, next) {
  var user = User.findOne({ _id: req.user._id }, function(err, user) {
    if (err) next(err);

    user.changePassword({
      current: req.body.currentPass, new: req.body.newPass
    }, function(err, resp) {

      var message = err ? err.message : 'Success';
      req.flash('message', message);

      res.render('pages/settings', {
        page: 'profile', message: req.flash('message')
      });
    });
  });
}

/**
 * Address settings
 * @method: GET, PUT
 */
function getAddress(req, res) {
  res.render('pages/settings', {
    page: 'address', countries: countries.getData()
  });
}

function postAddress(req, res, next) {
  User.update({ _id: req.user._id },
  { $set: { address: req.body.address }},
  function(err, user) {
    if (err) next(err);

    req.flash('message', 'New address added');
    res.redirect('/settings/address');
  });
}

function setup(app, passport) {
  app.get('/settings', help.protect, settings);

  // profile
  app.get('/settings/profile', help.protect, getProfile);
  app.post('/settings/profile', help.protect, putProfile);

  // address
  app.get('/settings/address', help.protect, getAddress);
  app.post('/settings/address', help.protect, postAddress);
}
module.exports = setup;
