//*npm init --y `npm i express` `npm i –D nodemon`
const express = require('express')
const app = express()
app.use(express.json())

const responseHandlers = require('./utils/handleResponses')
const db = require('./utils/database')
const initModels = require('./models/initModels')
const config = require('../config').api
const UsersRouter = require('./users/users.router')
const authRouter = require('./auth/auth.router')

db.authenticate()
    .then(() => console.log('Database authenticated'))
    .catch(err => console.log(err))

db.sync()
    .then(() => console.log('Database Synced'))
    .catch(err => console.log(err))

initModels()

app.use('/api/v1/users', UsersRouter)
app.use('/api/v1/auth', authRouter)

app.get('/', (req, res) => {
    responseHandlers.success({
        res,
        status: 200,
        message: 'Servidor inicializado correctamente',
        data: {
            "Users": `${config.host}/api/v1/users`,
            "Login": `${config.host}/api/v1/auth/login`,
            "Users-id": `${config.host}/api/v1/users/:id`,
            "MyUsuario": `${config.host}/api/v1/users/me`,
        }
    })
})

app.use('*', (req, res)=> {
    responseHandlers.error({
        res,
        status: 404,
        message: `URL not found, please try with ${config.host}`,
    })
})

app.listen(config.port,() => {
    console.log(`Server started at port ${config.port}`)
})

