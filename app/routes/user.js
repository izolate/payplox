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

/**
 * Settings
 */
function settings(req, res) {
  res.send(req.user);
}

function isAuthorized(req, res, next) {
  if (!req.user) {
    res.redirect('/');
  } else {
    next();
  }
}

function setup(app, passport) {
  app.get('/login', login);
  app.get('/signup', signup);
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
