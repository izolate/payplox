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

function setup(app, passport) {
  app.get('/profile', help.protect, getProfile);
}
module.exports = setup;
