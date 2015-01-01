var help = require('app/controllers/helpers');
var User = require('app/models/user');

/**
 * Signup page
 * @method: GET
 */
function signup(req, res) {
  res.render('pages/login', {
    form: 'signup',
    message: req.flash('message')
  });
}

/**
 * Login page
 * @method: GET
 */
function login(req, res) {
  res.render('pages/login', {
    form: 'login',
    message: req.flash('message')
  });
}

/**
 * Logout
 * @method: GET
 */
function logout(req, res) {
  req.logout();
  res.redirect('/');
}

/**
 * Change email address
 *  @method: PUT
 */
function updateEmail(req, res, next) {
  var query = User.findOne({ _id: req.user._id }, function(err, user) {
    if (err) next(err);

    user.changeEmail(req.body.email, function(err, user) {
      if (err)
        res.send({ error: true, message: err.message });
      else
        res.send({ _id: user._id, email: user.email });
    });
  });
}

/**
 * Change password
 *  @method: PUT
 */
function updatePassword(req, res, next) {
  var user = User.findOne({ _id: req.user._id }, function(err, user) {
    if (err) next(err);

    user.changePassword({
      current: req.body.currentPass, new: req.body.newPass
    }, function(err, resp) {

      var message = err ? err.message : 'Success';
      req.flash('message', message);

      res.render('pages/settings', {
        message: req.flash('message')
      });
    });
  });
}

function setup(app, passport) {
  // create
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

  // read
  app.get('/signup', signup);
  app.get('/login', login);
  app.get('/logout', logout);

  // update
  app.put('/user/email', updateEmail);
  app.put('/user/password', updatePassword);
}

module.exports = setup;
