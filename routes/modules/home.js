const { urlencoded } = require('express')
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
  return URL.create({
    originalURL: req.body.originalURL,
    key: randomText()
  })
  .then(res.redirect('/'))
  .catch(error => console.error(error) )
})

// link to page
router.get('/:key', (req, res) => {
  const key = req.params.key
  return URL.find({ key: key })
    .then(website => res.redirect(website[0].originalURL))
  .catch(error => console.error(error))
})

module.exports = router
