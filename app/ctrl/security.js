const app = require('../index')
const csrf = require('csurf')

/**
 * Cross-Site Request Forgery tokens for forms
 */
app.use(csrf())
app.use(function (err, req, res, next) {
  if (err.code !== 'EBADCSRFTOKEN') return next(err)

  // handle CSRF token errors
  res.status(403).send('Invalid CSRF token')
})
