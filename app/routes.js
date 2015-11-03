const router = module.exports = require('express').Router()
const users = require('./ctrl/users')

// Hello World!
router.get('/', (req, res, next) => res.render('pages/home'))
router.get('/dash', (req, res, next) => res.json(req.session))

// Users
router.get('/signup', users.GET.signup)
router.post('/signup', users.POST.signup)
router.get('/login', users.GET.login)
router.post('/login', users.POST.login)
