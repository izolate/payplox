function home(req, res) {
  res.render('pages/home');
}

function dashboard(req, res, next) {
  res.render('pages/dashboard');
}

function setup(app, passport) {
  app.get('/overview', dashboard);
  app.get('/', home);
}
module.exports = setup;
