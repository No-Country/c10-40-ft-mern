const { DataTypes } = require("sequelize");
const db = require("../utils/database");

const Routine = db.define("routine", {
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
  daysNumber: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  isCompleted: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  imagen: {
    type: DataTypes.STRING,
    allowNull: true,
    initialValue: null,
  },
});

module.exports = Routine;
