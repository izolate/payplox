var helpers = {};

/**
 * Protect routes from non authorized users
 */
helpers.protect = function(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    return res.redirect('/');
  }
};

module.exports = helpers;
