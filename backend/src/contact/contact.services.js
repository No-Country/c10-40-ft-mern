const nodemailer = require("nodemailer");
const config = require("../../config").nodemailer;
function sendMail(to, subject, text) {
  const transporter = nodemailer.createTransport({
    service: config.service,
    auth: {
      user: config.auth.user,
      pass: config.auth.pass,
    },
  });

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
