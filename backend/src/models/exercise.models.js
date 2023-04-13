const { DataTypes } = require("sequelize");
const db = require("../utils/database");

const Exercise = db.define("exercise", {
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
});

module.exports = Exercise;
