//! Instalaciones "npm i sequelize" "npm i pg pg-hstore #Para postgres" 
//* Utilidad para manejar la conexion a la Base de Datos

const {Sequelize} = require('sequelize')

const config = require('../../config')

const db = new Sequelize(config.db[config.api.nodeEnv])

module.exports = db