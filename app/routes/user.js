var help = require('app/controllers/helpers');

/**
 * Signup
 */
function signup(req, res) {
  res.render('pages/login', {
    form: 'signup',
    message: req.flash('message')
  });
}

/**
 * Login
 */
function login(req, res) {
  res.render('pages/login', {
    form: 'login',
    message: req.flash('message')
  });
}

function logout(req, res) {
  req.logout();
  res.redirect('/');
}

function setup(app, passport) {
  app.get('/signup', signup);
  app.get('/login', login);
  app.get('/logout', logout);

  app.post('/signup', passport.authenticate('signup', {
    successRedirect : '/',
    failureRedirect : '/signup',
    failureFlash : true
  }));

  app.post('/login', passport.authenticate('login', {
    successRedirect : '/',
    failureRedirect : '/login',
    failureFlash : true
  }));
}

module.exports = setup;
