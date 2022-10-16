// require modules
const mongoose = require('mongoose')
// link to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
// check mongoose connection
const db = mongoose.connection
db.on('error', () => {
  console.log('MongoDB error!')
})
db.once('open', () => {
  console.log('MongoDB connected!')
})
// export module
module.exports = db
