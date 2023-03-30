const router = require('express').Router()
const passport = require('passport');
const authServices = require('./auth.services')

router.post('/login', authServices.postLogin)

router.get("/google", passport.authenticate('auth-google', { scope: ["email", "profile"] }))

router.get("/oauth2/redirect/google", passport.authenticate('auth-google', { session: false }), authServices.postGoogle)

module.exports = router
