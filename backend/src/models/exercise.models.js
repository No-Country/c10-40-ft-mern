const { DataTypes } = require("sequelize");
const db = require("../utils/database");

const Exercise = db.define(
  "exercise",
  {
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
    bodyPart: {
      type: DataTypes.STRING,
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
    isCompleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  { timestamps: false }
);

module.exports = Exercise;
