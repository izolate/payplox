var help = require('../controllers/helpers.js');

function home(req, res) {
  res.render('pages/home');
}

function dashboard(req, res, next) {
  res.render('pages/dashboard');
}

function setup(app, passport) {
  app.get('/dashboard', help.protect, dashboard);
  app.get('/', home);
}
module.exports = setup;
