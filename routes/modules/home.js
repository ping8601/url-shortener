const express = require('express')
const router = express.Router()
const URL = require('../../models/URL')
const randomText = require('../../utilities/randomText')

// home page
router.get('/', (req, res) => {
  res.render('index')
})

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
      return res.render('success', { key: key? key:url.key })
    })
    .catch(error => console.error(error))
})

// link to page
router.get('/:key', (req, res) => {
  const key = req.params.key
  return URL.find({ key })
    .then(website => res.redirect(website[0].originalURL))
    .catch(error => console.error(error))
})

module.exports = router
