const router = module.exports = require('express').Router()
const User = require('../models/user')
const countries = require('country-list')()

router.use(require('../utils').auth)

router.get('/', function (req, res, next) {
  res.redirect('/me/services')
})

/**
 * Services, Addresses, Payment details
 * @method: GET
 */
router.get('/services', function (req, res, next) {
  res.render('pages/me', {
    countries: countries.getData(),
    message: req.flash('message')
  })
})

router.get('/addresses', function (req, res, next) {
  res.render('pages/me', {
    countries: countries.getData(),
    message: req.flash('message')
  })
})

router.get('/payments', function (req, res, next) {
  res.render('pages/me', {
    countries: countries.getData(),
    message: req.flash('message')
  })
})
