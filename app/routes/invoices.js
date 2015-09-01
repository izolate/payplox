const router = module.exports = require('express').Router()

router.use(require('../utils').auth)

router.get('/', function (req, res, next) {
  res.render('pages/invoices')
})
