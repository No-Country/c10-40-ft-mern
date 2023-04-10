const { ExtractJwt, Strategy } = require("passport-jwt");
const GoogleStrategy = require("passport-google-oauth2").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const passport = require("passport"); //la seguridad autenticacion y verificacion
const { findUserById, findUserByEmail } = require("../users/users.controllers");
const config = require("../../config").api;
const userControllers = require("../users/users.controllers");
require("dotenv").config;

// Configuracion para la estrategia de Facebook
const passportFacebookConfig = {
  clientID: config.facebook.clientID,
  clientSecret: config.facebook.clientSecret,
  callbackURL: `${process.env.HOST}/api/v1/auth/oauth2/redirect/facebook`,
  passReqToCallback: true,
  profileFields: ["id", "email", "name"],
};

//*Configuracion para la estrategia de Google
const passportGoogleConfig = {
  clientID: config.google.clientID,
  clientSecret: config.google.clientSecret,
  callbackURL: `${process.env.HOST}/api/v1/auth/oauth2/redirect/google`,
  passReqToCallback: true,
};

//? Configuracion para la estrategia de JWT
const passportConfigs = {
  //Se maneja la estrategia con bearerToken
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.secretOrKey, //palabra secreta
};

//*Estrategia para iniciar sesion con Facebook
passport.use('auth-facebook', new FacebookStrategy(passportFacebookConfig, (request, accessToken, refreshToken, profile, done) => {
    findUserByEmail(profile.emails[0].value)
        .then(data => {
            if (data) {
                return done(null, data) //? Si el usuraio se ha logueado antes, solo regresa sus datos
            } else {
                const newUser = userControllers.createNewUser({
                    "firstName" : profile.name['givenName'],
                    "email" : profile.emails[0].value,
                    "password" : "temporal",
                    "country" : "countryTemporal",
                    "Biography" : "biography"
                })
                return done(null, newUser) //? Si el usuario no se ha logueado antes, lo registra en la bd
            }
        })
        .catch(err => {
            return done(err, false) //? Error en la base de datos
        })
}))

//*Estrategia para iniciar sesion con google
passport.use(
  "auth-google",
  new GoogleStrategy(
    passportGoogleConfig,
    (request, accessToken, refreshToken, profile, done) => {
      findUserByEmail(profile.emails[0].value)
        .then((data) => {
          if (data) {
            return done(null, data); //? Si el usuraio se ha logueado antes, solo regresa sus datos
          } else {
            const newUser = userControllers.createNewUser({
              firstName: profile.given_name,
              email: profile.emails[0].value,
              password:
                Math.random().toString(36).substring(2, 15) +
                Math.random().toString(36).substring(2, 15),
            });
            return done(null, newUser); //? Si el usuario no se ha logueado antes, lo registra en la bd
          }
        })
        .catch((err) => {
          return done(err, false); //? Error en la base de datos
        });
    }
  )
);

//*Estrategia para iniciar sesion con Facebook
passport.use(
  "auth-facebook",
  new FacebookStrategy(
    passportFacebookConfig,
    (request, accessToken, refreshToken, profile, done) => {
      findUserByEmail(profile.emails[0].value)
        .then((data) => {
          if (data) {
            return done(null, data); //? Si el usuraio se ha logueado antes, solo regresa sus datos
          } else {
            const newUser = userControllers.createNewUser({
              firstName: profile.name["givenName"],
              email: profile.emails[0].value,
              password:
                Math.random().toString(36).substring(2, 15) +
                Math.random().toString(36).substring(2, 15),
            });
            return done(null, newUser); //? Si el usuario no se ha logueado antes, lo registra en la bd
          }
        })
        .catch((err) => {
          return done(err, false); //? Error en la base de datos
        });
    }
  )
);

//*Estrategia para asignar JWT al usuario logueado
passport.use(
  "jwt",
  new Strategy(passportConfigs, (tokenDecoded, done) => {
    findUserById(tokenDecoded.id)
      .then((data) => {
        if (data) {
          done(null, tokenDecoded); //? El usuario si Existe y es valido
        } else {
          done(null, false, { message: "Token Incorrect" }); //? El usuario no existe
        }
      })
      .catch((err) => {
        done(err, false); //? Error en la base de datos
      });
  })
);

module.exports = passport;
