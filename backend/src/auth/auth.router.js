const router = require('express').Router()

const postLogin = require('./auth.services')

router.post('/login', postLogin)

module.exports = router
