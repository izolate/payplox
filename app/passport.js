var User = require('./models/User');
var LocalStrategy = require('passport-local').Strategy;
var bCrypt = require('bcrypt-nodejs');

module.exports = function(passport) {

  // used to serialize the user for the session
  passport.serializeUser(function(user, done) {
    done(null, user._id);
  });

  // used to deserialize the user
  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });

  /**
   * Login existing user
   */
  passport.use('login', new LocalStrategy({
    usernameField: 'email',
    passReqToCallback: true
  },
  function(req, email, password, done) {

    // check to see if the user trying to login already exists
    User.findOne({ 'email': email }, function(err, user) {
      if (err)
        return done(err);

      // fail! user doesn't exist, log error and redirect back
      if (!user) {
        return done(
          null, false, req.flash('message', 'User not found')
        );
      }

      // fail! user exists, but incorrect password
      if (!isValidPassword(user, password)){
        return done(null, false, req.flash('message', 'Invalid Password'));
      }

       // success! user exists & password is correct
      return done(null, user);
    });

  }));


  /**
   * Signup new user
   */
  passport.use('signup', new LocalStrategy({
    usernameField: 'email',
    passReqToCallback: true
  },
  function(req, email, password, done) {

    findOrCreateUser = function() {
      // search for a user with that email
      User.findOne({ 'email': email }, function(err, user) {
        if (err)
          return done(err);

        if (user) {
          // fail! user already exists
          return done(null, false, req.flash('message', 'User already exists'));
        } else {
          // success! create new user
          var newUser = new User();
          newUser.email = email.toLowerCase();
          newUser.password = createHash(password);
          newUser.name = req.body.name;

          // save user
          newUser.save(function(err) {
            if (err) throw err;
            return done(null, newUser);
          });
        }
      });
    };

    /**
     * Delay the execution of findOrCreateUser and execute
     * the method in the next tick of the event loop
     */
    process.nextTick(findOrCreateUser);
  }));

};

// compares password hash
var isValidPassword = function(user, password){
  return bCrypt.compareSync(password, user.password);
};

// Generates hash using bCrypt
var createHash = function(password) {
  return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
};
