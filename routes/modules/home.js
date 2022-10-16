const express = require('express')
const router = express.Router()
const URL = require('../../models/URL')

// home page
router.get('/', (req, res) => {
  res.render('index')
})

// link to page
router.get('/:key', (req, res) => {
  const key = req.params.key
  return URL.find({ key })
    .then(website => res.redirect(website[0].originalURL))
    .catch(error => console.error(error))
})

module.exports = router
