const mongoose = require('mongoose')
const Schema = mongoose.Schema

const URLSchema = new Schema({
  originalUrl: {
    type: String,
    required: true
  },
  shortenedUrl: {
    type: String,
    required: true
  }
})