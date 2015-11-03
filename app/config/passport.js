const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const Users = require('../models/users')

module.exports = function (app) {

  app.use((req, res, next) => {
    const users = new Users(req.db)
    const opts = { usernameField: 'email', passReqToCallback: true }

    passport.use(new LocalStrategy(opts, (email, pass, done) => {

      /**
       * Find a user with the email specified
       * and make sure the password matches
       */
      users.findOne({ 'email': email }).then(user => {
        /*
        if (!user)
          return done(null, false, { message: 'No user found' })
        else if (users.badPassword(pass, user.password))
          return done(null, false, { message: 'Bad password' })
        else return done(null, user)
        */
       console.log(user)
      }).catch(err => done(err))

    }))

    return next()
  })
}
