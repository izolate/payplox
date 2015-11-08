require('dotenv').load()
const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const expressMongoDB = require('express-mongo-db')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const app = express()

// Configuration
app.set('port', process.env.NODE_PORT || 3000)
app.set('views', `${__dirname}/views`)
app.set('view engine', 'jade')
app.use('/static', express.static(`${__dirname}/static`))
app.use('/img', express.static(`${__dirname}/static/src/img`))
app.locals.pretty = (process.env.MINIFY === 'false')

// Database
const DB_URI = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`
app.use(expressMongoDB(DB_URI))

// Body parsing & Cookies
app.use(bodyParser.urlencoded({ extended: false })) // application/x-www-form-urlencoded
app.use(bodyParser.json()) // application/json
app.use(cookieParser())
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  store: new MongoStore({ url: DB_URI })
}))

// Routes
app.use('/', require('./routes'))

// Run
app.listen(app.get('port'), err => {
  if (err) console.error(err)
  else console.log(`Server started: http://localhost:${app.get('port')}/`)
})
