const router = module.exports = require('express').Router()
const User = require('../models/user')

router.use(require('../utils').auth)

router.get('/', function(req, res, next) {
  res.render('pages/settings', {
    message: req.flash('message')
  })
})
