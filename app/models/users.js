const DB = require('./db')
const bcrypt = require('bcryptjs')

class Users extends DB {
  constructor (db) {
    super(db, 'users')
  }
}

/**
class Users {
  constructor (req) {
    this.col = req.db.collection('users')
  }

  find (query) {
    return this.col.findOne(query)
  }

  badPassword (pass, userPass) {
    return !bcrypt.compareSync(pass, userPass)
  }
}
*/

module.exports = Users
