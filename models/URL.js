const mongoose = require('mongoose')
const Schema = mongoose.Schema

const URLSchema = new Schema({
  originalURL: {
    type: String,
    required: true
  },
  key: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('URL', URLSchema)