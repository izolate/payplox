var help = require('../controllers/helpers.js');

function home(req, res) {
  res.locals.routeName = 'Home';
  res.render('pages/home');
}

function dashboard(req, res, next) {
  res.locals.routeName = 'Dashboard';
  res.render('pages/dashboard');
}

function setup(app, passport) {
  app.get('/dashboard', help.protect, dashboard);
  app.get('/', home);
}
module.exports = setup;
