var express = require('express');
var config = require('./config');
var app = express();
var db = require('./db.js').connect();
var passport = require('passport');
var session = require('express-session');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var flash = require('connect-flash');
var log = require('winston').loggers.get('app:server');

// config ================================================
app.use(function (req, res, next) {
  res.locals.req = req;
  next();
});
app.use(cookieParser());
app.use(session({
  secret: 'they were like northern stars',
  resave: true,
  saveUninitialized: true
}));
app.use(bodyParser.urlencoded({ extended: true }));

// passport
require('./passport')(passport);
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// views
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

// static files
app.use('/assets', express.static(__dirname + '/assets'));

// routes ================================================
[
  './routes/user',
  './routes/clients'
].forEach(function(routePath) {
  require(routePath)(app, passport);
});

// launch ================================================
app.listen(config.express.port, config.express.ip, function (error) {
  if (error) {
    log.error('Unable to listen for connections', error);
    process.exit(10);
  }
  log.info('app is listening on http://' +
    config.express.ip + ':' + config.express.port);
});
