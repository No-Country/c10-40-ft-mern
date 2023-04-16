const config = require("../../config").nodemailer;
const transporter = require("../utils/nodemailer");
function sendMail(to, subject, text) {
    const mailOptions = {
        from: `ExerciFY Contact <${config.auth.user}>`,
        to: config.auth.user,
        subject: subject,
        text: `Desde el Email: ${to}\n${text}`,
    };

    return transporter.sendMail(mailOptions);
}

module.exports = {
    sendMail,
};
