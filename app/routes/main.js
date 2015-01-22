function home(req, res) {
  res.render('pages/home');
}

function dashboard(req, res, next) {
  res.render('pages/dashboard');
}

function setup(app, passport) {
  app.get('/', dashboard);
  app.get('/home', home);
}
module.exports = setup;
