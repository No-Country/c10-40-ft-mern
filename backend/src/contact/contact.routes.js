const router = require("express").Router();
const mailController = require("./contact.controllers");

router.post("/", mailController.sendMail);

module.exports = router;
