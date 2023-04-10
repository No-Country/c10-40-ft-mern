const Cuerpo = require("./cuerpo");
const Rutina = require("./rutina");
const User = require("./users.models");

const initModels = () => {
  User;
  
  Cuerpo.hasMany(Rutina)
  Rutina.belongsTo(Cuerpo)
};

module.exports = initModels;
