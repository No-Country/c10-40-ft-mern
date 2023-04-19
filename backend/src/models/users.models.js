//* DataTypes de sequelize, esto genera el tipo de dato
const { DataTypes } = require("sequelize");
const db = require("../utils/database");

//Este es el modelo
const User = db.define("pruebarda", {
  //NO CAMBIAR EL NOMBRE MIENTRAS ESTEMOS EN DEVELOPER. CAMBIARLO CUANDO ESTE EN PRODUCCION
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false,
    unique: true,
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
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.STRING,
    defaultValue: "member",
  },
  gender: {
    type: DataTypes.STRING,
  },
  age: {
    type: DataTypes.INTEGER,
  },
  height: {
    type: DataTypes.INTEGER,
  },
  weight: {
    type: DataTypes.INTEGER,
  },
  profileCompleted: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  googleId: {
    type: DataTypes.STRING,
    defaultValue: null,
  },
  photoUrl: {
    type: DataTypes.STRING,
    defaultValue: null,
  },
});

module.exports = User;
