const { DataTypes } = require("sequelize");
const db = require("../utils/database");
const Cuerpo = require("./cuerpo");

const Rutina = db.define("rutina", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    unique: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  series: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  repetitions: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  CuerpoId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      key: "id",
      model: Cuerpo,
    },
  },
  imagen: {
    type: DataTypes.STRING,
    allowNull: true,
    initialValue: null,
  },
});

module.exports = Rutina;
