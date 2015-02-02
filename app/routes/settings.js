var router = require('express').Router();
var help = require('../controllers/helpers');
var User = require('../models/user');

router.use(help.protect);

/**
 * Settings page
 * @method: GET
 */
router.get('/', function(req, res, next) {
  res.render('pages/settings', {
    message: req.flash('message')
  });
});


module.exports = router;
