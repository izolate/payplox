const csrf = require('csurf')

module.exports = function (app) {
  app.use(csrf())
  app.use(function (err, req, res, next) {
    if (err.code !== 'EBADCSRFTOKEN') return next(err)

    // handle CSRF token errors
    res.status(403).send('Invalid CSRF token')
  })
}
