/**
 * Protect routes from non authorized users
 */
exports.auth = function (req, res, next) {
  if (req.isAuthenticated()) return next()
  else res.redirect('/')
}
