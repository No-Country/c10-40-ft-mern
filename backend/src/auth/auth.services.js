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
    const User = await req.user;
    userControllers
        .findUserByEmail(User.email)
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
                    res,
                    status: 200,
                    message: "Correct Credentials!",
                    data: token,
                });
            } else {
                response.error({
                    res,
                    status: 401,
                    message: "Invalid Credentials",
                });
            }
        })
        .catch((err) => {
            response.error({
                res,
                status: 400,
                data: err,
                message: "Something Bad in social auth.services",
            });
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
                const newPasswordUrlMail = `${config.client}/reset-password/?token=${token}`;
                const newPasswordUrlFront = `${config.host}/api/v1/auth/new-password/?token=${token}`;
                /*
          AQUI SE ENVIA EL EMAIL, SI TODO SALE BIEN SE ENVIA EL MENSAJE, SI NO, SE ARROJA EL ERROR 400
        */
                transporter.sendMail({
                    from: `ExerciFY Staff <${authConfig.auth.user}>`,
                    to: email,
                    subject: "ExerciFY - Cambio de contraseña",
                    html: `
                            <h1>SOLICITUD DE CAMBIO DE CONTRASEÑA</h1>
                            <br>
                            <p>Para cambiar tu contraseña, haz click en el siguiente link: <a href="${newPasswordUrlMail}">CAMBIAR CONTRASEÑA</a>
                            </p>`,
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
    const { newPassword } = req.body;
    const token = req.query.token;
    if (!(token && newPassword)) {
        response.error({
            res,
            status: 401,
            message: "Todos los campos deben ser llenados",
        });
    }
    try {
        const jwtPayload = jwt.verify(token, config.secretOrKey);
        await userControllers
            .updateUser(jwtPayload.id, { password: hashPassword(newPassword) })
            .then((data) => {
                if (data) {
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
            })
            .catch((err) => {
                response.error({
                    res,
                    status: 400,
                    data: err,
                    message: "Something bad",
                });
            });
    } catch {
        response.error({
            res,
            status: 400,
            message: "Something bad",
        });
    }
};

module.exports = { postLogin, postSocial, forgotPassword, createNewPassword };
