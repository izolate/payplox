const DB = require('./db')
const bcrypt = require('bcryptjs')

class Users extends DB {
  constructor (db) {
    super(db, 'users')
  }

  create (email, pass) {
    const salt = bcrypt.genSaltSync(10)
    const password = bcrypt.hashSync(pass, salt)
    return super.update({ email }, { email, password })
  }

  authenticated (pass, hash) {
    return bcrypt.compareSync(pass, hash)
  }
}

module.exports = Users
