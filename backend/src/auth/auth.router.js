const router = require('express').Router()
const passport = require('passport');
const authServices = require('./auth.services')

//*Ruta para cuando el usuario se loguea normalmente
router.post('/login', authServices.postLogin)

//*Ruta para loguearse con google
router.get("/google", passport.authenticate('auth-google', { scope: ["email", "profile"] }))

//*Ruta que llega despues de loguearse en google
router.get("/oauth2/redirect/google", passport.authenticate('auth-google', { session: false }), authServices.postGoogle)

module.exports = router
