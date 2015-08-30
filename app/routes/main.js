const protect = require('../utils').auth

function home(req, res) {
  res.render('pages/home')
}

function dashboard(req, res, next) {
  res.render('pages/dashboard')
}

function setup(app, passport) {
  app.get('/dashboard', protect, dashboard)
  app.get('/', home)
}
module.exports = setup
