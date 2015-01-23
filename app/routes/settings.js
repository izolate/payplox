var help = require('../controllers/helpers');
var User = require('../models/user');

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

function setup(app, passport) {
  app.get('/settings', help.protect, settings);
}

module.exports = setup;
