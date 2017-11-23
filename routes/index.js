var express = require('express')
var router  = express.Router()

router.use('/apiswatson', require('./apiswatson'))

module.exports = router