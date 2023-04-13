const { DataTypes } = require("sequelize");
const db = require("../utils/database");

const BodyPart = db.define("body_part", {
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
});

module.exports = BodyPart;
