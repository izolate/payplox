var help = require('app/controllers/helpers');
var User = require('app/models/user');
var countries = require('country-list')();

/**
 * Profile settings
 * @method: GET
 */
function getProfile(req, res) {
  res.render('pages/profile', {
    page: 'profile',
    countries: countries.getData(),
    message: req.flash('message')
  });
}

/**
 * Save new address
 * @method: POST
 */
function postAddress(req, res, next) {
  User.update({ _id: req.user._id },
  { $push: { address: req.body.address }},
  function(err, user) {
    if (err) next(err);

    req.flash('message', 'New address added');
    res.redirect('/settings/address');
  });
}

function setup(app, passport) {
  app.get('/profile', help.protect, getProfile);
  app.post('/profile/address', help.protect, postAddress);
}
module.exports = setup;
