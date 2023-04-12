const mailerService = require("./contact.services");

async function sendMail(req, res) {
  const { name, email, subject, message } = req.body;

  await mailerService
    .sendMail(email, subject, `Nombre: ${name}\nMensaje: ${message}`)
    .then(() => res.send("Email enviado correctamente"))
    .catch((err) => res.status(500).send(err));
}

module.exports = {
  sendMail,
};
