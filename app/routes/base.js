const protect = require('../utils').auth
const passport = require('../config/passport')

module.exports = function (app, passport) {

  app.get('/', (req, res, next) => res.render('pages/home'))

  // Login & Signup
  app.get('/login', (req, res, next) => res.render('pages/home', {
    form: 'login'
  }))

  app.post('/login', (req, res, next) => {
    console.log(passport)
    res.send('cool')
  })

  app.get('/overview', protect, (req, res, next) => {
    res.render('pages/dashboard')
  })

}
