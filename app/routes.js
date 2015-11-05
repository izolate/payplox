const router = module.exports = require('express').Router()
const users = require('./ctrl/users')

// Protect a route from non-authenticated users
const protect = (req, res, next) => {
  if (!req.session.user) return res.redirect('/login')
  else return next()
}

// Hello World!
router.get('/', (req, res, next) => res.render('pages/home'))
router.get('/dash', protect, (req, res, next) => {
  res.render('pages/dash')
})

// Users
router.get('/signup', users.GET.signup)
router.post('/signup', users.POST.signup)
router.get('/login', users.GET.login)
router.post('/login', users.POST.login)
router.get('/logout', users.GET.logout)
