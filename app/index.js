require('dotenv').load()
const express = require('express')
const app = module.exports = express()
const db = require('./db.js').connect()
const passport = require('passport')
const session = require('express-session')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const flash = require('connect-flash')

// Configuration
app.locals.pretty = (process.env.NODE_ENV === 'development')
app.use(function (req, res, next) {
  res.locals.req = req
  next()
})
app.use(cookieParser())
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: true
}))
app.use(bodyParser.urlencoded({ extended: true }))

// Database & Security
app.use(require('./ctrl/db'))
require('./ctrl/security')

// passport
require('./ctrl/passport')(passport)
app.use(passport.initialize())
app.use(passport.session())
app.use(flash())

// views
app.set('views', `${__dirname}/views`)
app.set('view engine', 'jade')

// static files
app.use('/static', express.static(`${__dirname}/static`))

// routes
require('./ctrl/routes')(app)

;['me', 'settings'].forEach(function (module) {
  app.use(`/${module}`, require(`./routes/${module}`))
})

;[
  './routes/main',
  './routes/user',
  './routes/clients'
].forEach(function(routePath) {
  require(routePath)(app, passport)
})

// Run application
app.listen(process.env.NODE_PORT, function (err) {
  if (err) console.error(err)
  else
    console.log(`${process.env.APP_NAME} listening on localhost:${process.env.NODE_PORT}`)
})
