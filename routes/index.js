const express = require('express')
const router = express.Router()
const home = require('./modules/home')
const result = require('./modules/result')
const show = require('./modules/show')

router.use('/result/', result)
router.use('/show/', show)
router.use('/', home)

module.exports = router
