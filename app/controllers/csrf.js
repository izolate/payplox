var csrf = require('csurf');

module.exports = function(app) {
  app.use(csrf());
  app.use(function (err, req, res, next) {
    if (err.code !== 'EBADCSRFTOKEN') return next(err);

    // handle CSRF token errors here
    res.status(403);
    res.send('session has expired or form tampered with');
  });
};
