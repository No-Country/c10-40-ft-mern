const nodemailer = require("nodemailer");
const config = require("../../config").nodemailer;

const transporter = nodemailer.createTransport({
    service: config.service,
    auth: {
        user: config.auth.user,
        pass: config.auth.pass,
    },
});

module.exports = transporter;
