const router = require('express').Router()

const passport = require('passport');
const postLogin = require('./auth.services')

router.post('/login', postLogin)

router.get("/google", passport.authenticate('auth-google', { scope: ["email", "profile"] })
);

router.get("/oauth2/redirect/google", passport.authenticate('auth-google', { session: false }), (req, res) => {
    jwt.sign({ user: req.user }, "secretKey", { expiresIn: "1h" }, (err, token) => {
        if (err) {
            return res.json({
                token: null,
        })};
        res.json({
            token,
        })}
)});

module.exports = router
