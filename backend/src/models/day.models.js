const { DataTypes } = require("sequelize");
const db = require("../utils/database");

const Day = db.define(
  "day",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    day: {
      type: DataTypes.ENUM,
      values: [
        "Lunes",
        "Martes",
        "Miercoles",
        "Jueves",
        "Viernes",
        "Sabado",
        "Domingo",
      ],
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Day;
