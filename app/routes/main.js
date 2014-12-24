function home(req, res) {
  res.render('pages/home');
}

function setup(app, passport) {
  app.get('/', home);
}
module.exports = setup;
