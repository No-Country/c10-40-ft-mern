const { ExtractJwt, Strategy } = require('passport-jwt')
const GoogleStrategy = require("passport-google-oauth2").Strategy;
const passport = require('passport')//la seguridad autenticacion y verificacion
const { findUserById, findUserByEmail } = require('../users/users.controllers')
const config = require('../../config').api
const userControllers = require('../users/users.controllers')
require('dotenv').config

const passportGoogleConfig = {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: '/oauth2/redirect/google',
    passReqToCallback: true,
}
const passportConfigs = {
    //Se maneja la estrategia con bearerToken
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.secretOrKey //palabra secreta
}

passport.use('auth-google', new GoogleStrategy(passportGoogleConfig, (request, accessToken, refreshToken, profile, done) => {
    findUserByEmail(profile.emails[0].value)
        .then(data => {
            if (data) {
                return done(null, data)
            } else {
                const newUser = userControllers.createNewUser({
                    "firstName" : profile.displayName,
                    "email" : profile.emails[0].value,
                    "password" : "temporal",
                    "country" : "countryTemporal",
                    "Biography" : "biography"
                })
                return done(null, newUser)
            }
        })
        .catch(err => {
            return done(err, false)
        })
}));

//*New estrategia...el token lo decodifica 
passport.use('jwt', new Strategy(passportConfigs, (tokenDecoded, done) => {
    findUserById(tokenDecoded.id)
        .then(data => {
            if (data) {
                done(null, tokenDecoded) //? El usuario si Existe y es valido
            } else {
                done(null, false, { message: 'Token Incorrect' }) //? El usuario no existe
            }
        })
        .catch(err => {
            done(err, false) //? Error en la base de datos
        })
}))

module.exports = passport