const util = require('util')
const mongoose = require('mongoose')
const dbUrl = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`

exports.connect = function() {
  let db
  if (!db) db = mongoose.connect(dbUrl)
  return db
}
