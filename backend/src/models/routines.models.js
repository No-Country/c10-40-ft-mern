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
  weekDay: {
    type: DataTypes.ENUM,
    values: [
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
      "sunday",
    ],
    allowNull: false,
  },
});

module.exports = Routine;
