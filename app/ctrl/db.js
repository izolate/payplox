const client = require('mongodb').MongoClient
const uri = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`

/**
 * Share a db connection
 */
module.exports = function (req, res, next) {
  if (req.db) return next()
  else client.connect(uri)
    .then(function (db) {
      req.db = db
      return next()
    })
    .catch(function (err) {
      console.error(err.message)
      req.db = null
      return next()
    })
}
