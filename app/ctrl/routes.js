module.exports = function(app) {
  // create route paths for use in views
  app.use(function(req, res, next) {
    var path = req.path.split('/');
    path = path.splice(1, path.length);
    if ( !path[0].length ) path[0] = 'home';
    app.locals.routeName = path;
    next();
  });
};