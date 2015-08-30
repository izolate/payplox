var router = require('express').Router()
var User = require('../models/user')

router.use(require('../utils').auth)

router.get('/', function(req, res, next) {
  res.render('pages/settings', {
    message: req.flash('message')
  })
})


module.exports = router
