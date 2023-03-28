const checkUserCredentials = require('./auth.controller')
const response = require('../utils/handleResponses')
const jwt = require('jsonwebtoken')
const config = require('../../config').api

const postLogin = (req, res) => {
    const { email, password } = req.body
    checkUserCredentials(email, password)
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
                message: 'Something Bad'
            })
        })
}

module.exports = postLogin
