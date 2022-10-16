const express = require('express')
const router = express.Router()
const URL = require('../../models/URL')

router.get('/', (req, res) => {
  return URL.find()
    .lean()
    .then(urls => res.render('show', { urls }))
    .catch(error => console.error(error))
})

router.get('/search', (req, res) => {
  const keyword = req.query.keyword.trim()
  const keywordForRegex = new RegExp(keyword, 'gi')

  return URL.find({ $or:[ {originalURL: keywordForRegex}, {key: keywordForRegex} ]})
    .lean()
    .then(urls => {
      let message = ''
      if (urls.length === 0) {
        message = `No result with keyword "${ keyword }", please try again!`
      }
      return res.render('show', { urls, message, keyword })})
    .catch(error => console.error(error))
})

module.exports = router