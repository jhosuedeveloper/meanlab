const fs = require('fs')
const join = require('path').join
const mongoose = require('mongoose')
const config = require('../')

mongoose.Promise = global.Promise

const modelsPath = join(config.root, 'app/models')

// Load models
fs.readdirSync(modelsPath)
  .filter(file => ~file.search(/^[^.].*\.js$/))
  .forEach(file => require(join(modelsPath, file)))
// require('../../app/models/todo.js')

module.exports = connect

function connect () {
  const options = {
    useMongoClient: true,
    keepAlive: 1 // http://mongoosejs.com/docs/connections.html#keepAlive
  }
  return mongoose.connect(config.db, options)
}
