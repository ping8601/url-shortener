const express = require('express')
const router = express.Router()
const URL = require('../../models/URL')
const randomText = require('../../utilities/randomText')

// create link
router.post('/', (req, res) => {
  const originalURL = req.body.originalURL
  let key = ""
  return URL.findOne({ originalURL })
    .then(url => {
      if (!url) {
        key = randomText()
        URL.create({ originalURL, key })
      }
      return res.render('success', { key: key ? key : url.key })
    })
    .catch(error => console.error(error))
})

module.exports = router