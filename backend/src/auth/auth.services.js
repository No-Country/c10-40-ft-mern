const checkUserCredentials = require('./auth.controller')
const userControllers = require('../users/users.controllers')
const response = require('../utils/handleResponses')
const jwt = require('jsonwebtoken')
const config = require('../../config').api

//*Asignacion del token JWT
const postLogin = (req, res) => {
    const { email, password } = req.body
    checkUserCredentials(email, password) //? Verifica si las credenciales son correctas
        .then(data => {
            if(data){
                const token = jwt.sign({
                    id: data.id,
                    email: data.email,
                    firstName: data.firstName
                }, config.secretOrKey, {
                    expiresIn: '1d'
                })

                response.success({ //? Si las credenciales son correctas retorna el token
                    res,
                    status:200,
                    message: 'Correct Credentials!',
                    data: token
                })
            } else {
                response.error({ //? Si las credenciales son incorrectas retorna error
                    res,
                    status: 401,
                    message: 'Invalid Credentials'
                })
            }
        })
        .catch(err => { //? Error en la base de datos
            response.error({
                res,
                status:400,
                data: err,
                message: 'Something Bad in login auth.services'
            })
        })
}

//*Asignacion del token JWT
const postGoogle = async (req, res) => {
    const User = await req.user
    userControllers.findUserByEmail(User.email)
        .then(data => {
            if(data){
                const token = jwt.sign({
                    id: data.id,
                    email: data.email,
                    firstName: data.firstName
                }, config.secretOrKey, {
                    expiresIn: '1d'
                })

                response.success({
                    res,
                    status:200,
                    message: 'Correct Credentials!',
                    data: token
                })
            } else {
                response.error({
                    res,
                    status: 401,
                    message: 'Invalid Credentials'
                })
            }
        })
        .catch(err => {
            response.error({
                res,
                status:400,
                data: err,
                message: 'Something Bad in google auth.services'
            })
        })
}

module.exports = {postLogin, postGoogle}
