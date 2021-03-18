const router = require('express').Router()
const middlewares = require('./middlewares')
const apiUsers = require('./api/users')
const apiUpload = require('./api/upload')

//router.use('/otracosa', middlewares.checkToken, otraRuras)
router.use('/users', apiUsers); 
router.use('/apiUpload', apiUsers); 

module.exports = router