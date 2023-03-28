const usersControllers = require('./users.controllers')
const responses = require('../utils/handleResponses')
const {hashPassword} = require('../utils/crypto')

const getAllUsers = (req, res) => {
    usersControllers.findAllUser()
        .then(data => {
            responses.success({
                    status: 200,
                    data: data,
                    message: 'Getting all Users',
                    res
                })
        })
        .catch(err => {
            responses.error({
                    status: 400,
                    data: err,
                    message: 'Something bad getting all users',
                    res
                })
        })
}

const getUserById = (req ,res) => {
    const {id} = req.params
    usersControllers.findUserById(id)
        .then(data => {
            if(data){
                responses.success({
                    status: 200,
                    data,
                    message: `Getting User with id: ${id}`,
                    res
                })
            } else {
                responses.error({
                    status: 404,
                    message: `User with ID: ${id}, not found`,
                    res
                })
            }
        })
        .catch(err => {
            responses.error({
                status: 400,
                data: err,
                message: 'Something bad getting the user',
                res
            })
        })
}

const postNewUser = (req, res) => {
    const userObj = req.body
    usersControllers.createNewUser(userObj)
        .then(data => {
            responses.success({
                status: 201,
                data,
                message: `User created succesfully with id: ${data.id}`,
                res
            })
        })
        .catch(err => {
            responses.error({
                status: 400,
                data: err,
                message: 'Error ocurred trying to create a new user',
                res,
                fields: {
                    firstName : 'String',
                    email: 'example@example.com',
                    password: 'String',
                    country: 'String'
                }
            })
        })
}

const patchUser = (req, res) => {
    const {id} = req.params 
    const userObj = req.body 

    usersControllers.updateUser(id, userObj)
        .then(data => {
            if(data){
                responses.success({
                    status: 200,
                    data, 
                    message: `User with id: ${id} modified successfully`,
                    res
                })
            } else {
                responses.error({
                    status: 404,
                    message: `The user with ID ${id} not found`,
                    res,
                    fields: {
                        firstName : 'String',
                        email: 'example@example.com',
                        country: 'String'
                    }
                })
            }
        })
        .catch(err => {
            responses.error({
                status: 400,
                data: err,
                message: `Error ocurred trying to update user with id ${id}`,
                res,
                fields: {
                    firstName : 'String',
                    email: 'example@example.com',
                    country: 'String'
                }
            })
        })
}

const deleteUser = (req, res) => {
    const {id} = req.params 

    usersControllers.deleteUser(id)
        .then(data => {
            if(data){
                responses.success({
                    status: 200,
                    data, 
                    message: `User with id: ${id} deleted successfully`,
                    res
                })
            } else {
                responses.error({
                    status: 404,
                    data: err,
                    message: `The user with ID ${id} not found`,
                    res
                })
            }
        })
        .catch(err => {
            responses.error({
                status: 400,
                data: err,
                message: `Error ocurred trying to delete user with id ${id}`,
                res
            })
        })
}

//* los servicios para acciones sobre mi propio usuario:

const getMyUser = (req, res) => {
    const {id} = req.user
    usersControllers.findUserById(id)
        .then(data => {
            responses.success({
                res,
                status: 200,
                message: 'This is your current user',
                data
            })
        })
        .catch(err => {
            responses.error({
                res,
                status:400,
                message: 'Something bad getting the current user',
                data: err
            })
        })
}

const deleteMyUser = (req, res) => {

    const {id} = req.user

    usersControllers.deleteUser(id)
        .then(data => {
            responses.success({
                res,
                status:200,
                message: `User deleted successfully with id: ${id}`
            })
        })
        .catch(err => {
            responses.error({
                res,
                status:400,
                message: 'Something bad trying to delete this user'
            })
        })

}

const patchMyUser = (req, res) => {

    const {id} = req.user //? Esto es unicamente para saber quien es el usuario

    const { firstName, password, country, } = req.body

    usersControllers.updateUser(id, {firstName, password, country})
        .then(() => {
            responses.success({
                res,
                status: 200,
                message: 'Your user has been updated succesfully!',
            })
        })
        .catch(err => {
            responses.error({
                res,
                status: 400,
                message: 'Something bad',
                data: err
            })
        })
}


module.exports = {
    getAllUsers,
    getUserById,
    postNewUser,
    patchUser,
    deleteUser,
    getMyUser,
    deleteMyUser,
    patchMyUser
}