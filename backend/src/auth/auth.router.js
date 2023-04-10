const router = require("express").Router();
const passport = require("passport");
const authServices = require("./auth.services");

//*Ruta para cuando el usuario se loguea normalmente
router.post("/login", authServices.postLogin);

//*Ruta para loguearse con Facebook
router.get("/facebook", passport.authenticate("auth-facebook"));

//*Ruta que llega despues de loguearse en facebook
router.get(
  "/oauth2/redirect/facebook",
  passport.authenticate("auth-facebook", { session: false }),
  authServices.postSocial
);

//*Ruta para loguearse con Facebook
router.get("/facebook", passport.authenticate('auth-facebook'))

//*Ruta que llega despues de loguearse en facebook
router.get("/oauth2/redirect/facebook", passport.authenticate('auth-facebook', { session: false }), authServices.postGoogle)

//*Ruta para loguearse con google
router.get(
  "/google",
  passport.authenticate("auth-google", { scope: ["email", "profile"] })
);

//*Ruta que llega despues de loguearse en google
router.get(
  "/oauth2/redirect/google",
  passport.authenticate("auth-google", { session: false }),
  authServices.postSocial
);

module.exports = router;
