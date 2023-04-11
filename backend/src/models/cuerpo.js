const { DataTypes } = require("sequelize");
const db = require("../utils/database");

const Cuerpo = db.define("cuerpo", {
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
    }
});

module.exports = Cuerpo;
