var help = require('app/controllers/helpers');

/**
 * Signup
 */
function signup(req, res) {
  res.render('pages/user', {
    form: 'signup',
    message: req.flash('message')
  });
}

/**
 * Login
 */
function login(req, res) {
  res.render('pages/user', {
    form: 'login',
    message: req.flash('message'),
    csrfToken: req.csrfToken()
  });
}

function logout(req, res) {
  req.logout();
  res.redirect('/');
}

/**
 * Settings
 */
function settings(req, res) {
  res.send(req.user);
}

function setup(app, passport) {
  app.get('/signup', signup);
  app.get('/login', login);
  app.get('/logout', logout);

  app.get('/settings', help.protect, settings);

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
