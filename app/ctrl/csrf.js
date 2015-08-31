const app = require('../index')
const csrf = require('csurf')

app.use(csrf())

app.use(function (err, req, res, next) {
  if (err.code !== 'EBADCSRFTOKEN') return next(err)
    console.log('fuck')

  // handle CSRF token errors
  res.status(403).send('Invalid CSRF token')
})
