const { DataTypes } = require("sequelize");
const db = require("../utils/database");
const Cuerpo = require("./cuerpo");

const Rutina = db.define("rutina", {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        unique: true,
    },
    series: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    repetitions: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    cuerpo_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            key: 'id',
            model: Cuerpo
        }
    }
});

module.exports = Rutina;
