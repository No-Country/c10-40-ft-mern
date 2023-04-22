const router = require("express").Router();
const passport = require("passport");
const authServices = require("./auth.services");

//*Ruta para cuando el usuario se loguea normalmente
router.post("/login", authServices.postLogin);

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
//Envia el token al front y envía un email para cambiar la contraseña
router.put("/forgot-password", authServices.forgotPassword);

//Cambia la contraseña
router.put("/new-password", authServices.createNewPassword);

module.exports = router;
