var router = require('express').Router()
var User = require('../models/user')
var countries = require('country-list')()

router.use(require('../utils').auth)

router.get('/', function(req, res, next) {
  res.redirect('/configuration/services')
})

/**
 * Services, Addresses, Payment details
 * @method: GET
 */
router.get('/services', function(req, res, next) {
  res.render('pages/configuration', {
    countries: countries.getData(),
    message: req.flash('message')
  })
})

router.get('/addresses', function(req, res, next) {
  res.render('pages/configuration', {
    countries: countries.getData(),
    message: req.flash('message')
  })
})

router.get('/payments', function(req, res, next) {
  res.render('pages/configuration', {
    countries: countries.getData(),
    message: req.flash('message')
  })
})

module.exports = router
