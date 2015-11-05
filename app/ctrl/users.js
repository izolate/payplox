const Users = require('../models/users')

const GET = {
  login (req, res, next) {
    if (req.session.user) return res.redirect('/dash')
    else return res.render('pages/login', { form: 'login' })
  },

  signup (req, res, next) {
    if (req.session.user) return res.redirect('/dash')
    else return res.render('pages/login', { form: 'signup' })
  },

  logout (req, res, next) {
    if (req.session.user) req.session.regenerate(err => res.redirect('/'))
    else return res.redirect('/')
  }
}

const POST = {

  // User login
  login (req, res, next) {
    const users = new Users(req.db)

    users.findOne({ email: req.body.email })
      .then(user => {
        if (!user) throw new Error('User does not exist')
        else if (users.authenticated(req.body.password, user.password)) {
          req.session.regenerate(err => {
            req.session.user = user
            res.redirect('/dash')
          })
        }
        else throw new Error('Bad login :(')
      })
      .catch(nope => res.render('pages/login', { form: 'login', error: nope.message }))
  },

  // User signup
  signup (req, res, next) {
    const users = new Users(req.db)

    users.findOne({ email: req.body.email })
      .then(user => {
        if (user) throw new Error('User already exists')
        return users.create(req.body.email, req.body.password)
      })
      .then(yep => {
        req.session.regenerate(err => {
          req.session.user = yep
          res.redirect('/dash')
        })
      })
      .catch(nope => res.render('pages/login', { form: 'signup', error: nope.message }))
  }
}

module.exports = { GET, POST }
