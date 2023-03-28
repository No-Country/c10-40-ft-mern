//* DataTypes de sequelize, esto genera el tipo de dato 
const { DataTypes} = require('sequelize')

const db = require('../utils/database')

//Este es el modelo
const Users = db.define("users", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    role: {
      type: DataTypes.STRING,
      defaultValue: 'normal'
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Biography: {
      type: DataTypes.STRING,
      defaultValue: 'biografia'
    }
  });
  
  module.exports = Users