//*Aqui se maneja todo lo relasionado con la incriptacion de contraseñas
//* "npm i bcrypt" libreria para encriptar
const bcrypt = require('bcrypt')

//?incripta la palabra
const hashPassword = (plainPassword) => {
    return bcrypt.hashSync(plainPassword, 10)
}

//? Retornar un booleano (compara)
const comparePassword = (plainPassword, hashedPassword) => {
    return bcrypt.compareSync(plainPassword, hashedPassword)
}

module.exports = {
    hashPassword,
    comparePassword
}
