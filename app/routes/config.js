var help = require('../controllers/helpers');
var User = require('../models/user');
var countries = require('country-list')();

/**
 * Configuration
 * @method: GET
 */
function getConfig(req, res) {
  res.render('pages/config', {
    countries: countries.getData(),
    message: req.flash('message')
  });
}

function setup(app, passport) {
  app.get('/config', help.protect, getConfig);
}
module.exports = setup;
