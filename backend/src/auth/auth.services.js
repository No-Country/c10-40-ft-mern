const checkUserCredentials = require("./auth.controller");
const userControllers = require("../users/users.controllers");
const response = require("../utils/handleResponses");
const jwt = require("jsonwebtoken");
const config = require("../../config").api;
const authConfig = require("../../config").nodemailer;
const { hashPassword } = require("../utils/crypto");
const transporter = require("../utils/nodemailer");
//*Asignacion del token JWT
const postLogin = (req, res) => {
  const { email, password } = req.body;
  checkUserCredentials(email, password) //? Verifica si las credenciales son correctas
    .then((data) => {
      if (data) {
        const token = jwt.sign(
          {
            id: data.id,
            email: data.email,
            firstName: data.firstName,
          },
          config.secretOrKey,
          {
            expiresIn: "1d",
          }
        );

        response.success({
          //? Si las credenciales son correctas retorna el token
          res,
          status: 200,
          message: "Correct Credentials!",
          data: token,
        });
      } else {
        response.error({
          //? Si las credenciales son incorrectas retorna error
          res,
          status: 401,
          message: "Invalid Credentials",
        });
      }
    })
    .catch((err) => {
      //? Error en la base de datos
      response.error({
        res,
        status: 400,
        data: err,
        message: "Something Bad in login auth.services",
      });
    });
};

//*Asignacion del token JWT
const postSocial = async (req, res) => {
  const user = await req.user;
  userControllers
    .findUserByEmail(user.email)
    .then((data) => {
      if (!data) {
        return res.status(401).json({ message: "Invalid Credentials" });
      }
      const token = jwt.sign(
        {
          id: data.id,
          email: data.email,
          firstName: data.firstName,
        },
        config.secretOrKey,
        { expiresIn: "1d" }
      );
      // res.json({ token });
      res.redirect(`${config.client}/google?token=${token}`);
    })
    .catch((err) => {
      console.error(err);
      res.status(400).json({ message: "Something went wrong" });
    });
};

const forgotPassword = async (req, res) => {
  const { email } = req.body;
  userControllers
    .findUserByEmail(email)
    .then((data) => {
      if (data) {
        const token = jwt.sign(
          {
            id: data.id,
            email: data.email,
            firstName: data.firstName,
          },
          config.secretOrKey,
          {
            expiresIn: "1d",
          }
        );
        const newPasswordUrlMail = `${config.client}/reset-password?token=${token}`;
        const newPasswordUrlFront = `${config.host}/api/v1/auth/new-password/?token=${token}`;
        /*
          AQUI SE ENVIA EL EMAIL, SI TODO SALE BIEN SE ENVIA EL MENSAJE, SI NO, SE ARROJA EL ERROR 400
        */
        transporter.sendMail({
          from: `ExerciFY Staff <${authConfig.auth.user}>`,
          to: email,
          subject: "ExerciFY - Cambio de contraseña",
          html: `
          <div style="background-color: #f2f2f2; padding: 20px;">
          <h2>Cambiar contraseña</h2>
          <p>Hola,</p>
          <p>Recibimos una solicitud para cambiar la contraseña de tu cuenta. Si no solicitaste este cambio, por favor ignora este correo electrónico.</p>
          <p>Para cambiar tu contraseña, haz clic en el siguiente botón:</p>
          <p>
            <a href="${newPasswordUrlMail}" style="background-color: #008CBA; color: white; padding: 12px 20px; text-align: center; text-decoration: none; display: inline-block; border-radius: 5px;">Cambiar contraseña</a>
          </p>
          <p>Si el botón anterior no funciona, copia y pega la siguiente URL en tu navegador:</p>
          <p>${newPasswordUrlMail}</p>
          <p>Si tienes alguna pregunta o necesitas ayuda, por favor contacta a nuestro equipo de soporte.</p>
          <p>Gracias,</p>
          <p>ExerciFY Staff</p>
        </div>`,
        });
        response.success({
          res,
          status: 200,
          message: `Le hemos envíado el link con el token a ${email} para que ingrese al endpoint para cambiar la contraseña`,
          data: newPasswordUrlFront,
        });
      } else {
        response.error({
          res,
          status: 401,
          message: "email not found",
        });
      }
    })
    .catch((err) => {
      response.error({
        res,
        status: 400,
        data: err,
        message: "Something bad in login auth.services",
      });
    });
};

const createNewPassword = async (req, res) => {
  const { password } = req.body;
  const token = req.query.token;

  if (!token || !password) {
    response.error({
      res,
      status: 401,
      message: "Todos los campos deben ser completados",
    });
  }
  try {
    const jwtPayload = jwt.verify(token, config.secretOrKey);
    const data = await userControllers.updateUser(jwtPayload.id, {
      password: hashPassword(password),
    });
    if (data) {
      transporter.sendMail({
        from: `ExerciFY Staff <${authConfig.auth.user}>`,
        to: email,
        subject: "ExerciFY - Contraseña Actualizada",
        html: `
        <div style="background-color: #f2f2f2; padding: 20px;">
        <h2>Confirmación de cambio de contraseña</h2>
        <p>¡Hola ${data.firstName}!</p>
        <p>Te escribimos para confirmar que tu contraseña ha sido actualizada con éxito. Si no realizaste este cambio, por favor contacta a nuestro equipo de soporte inmediatamente.</p>
        <p>Recuerda que si necesitas ayuda o tienes alguna pregunta, nuestro equipo de soporte está disponible para ayudarte en cualquier momento.</p>
        <p>Gracias por utilizar nuestros servicios.</p>
        <p>Saludos cordiales,</p>
        <p>El equipo de ExerciFY</p>
        </div>`,
      });
      response.success({
        res,
        status: 200,
        message: "Se ha cambiado la contraseña!",
      });
    } else {
      response.error({
        res,
        status: 401,
        message: "No se ha podido cambiar la contraseña",
      });
    }
  } catch (err) {
    response.error({
      res,
      status: 400,
      data: err,
      message: "Something bad",
    });
  }
};

module.exports = { postLogin, postSocial, forgotPassword, createNewPassword };
