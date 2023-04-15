const BodyPart = require("./bodyPart.models");
const Exercise = require("./exercise.models");
const Routine = require("./routines.models");
const User = require("./users.models");

const initModels = () => {
  User;
  // BodyPart;
  // Exercise;
  // TODO: Check associations
  // BodyPart.hasMany(Exercise);
  Exercise.belongsTo(BodyPart);
  BodyPart.hasMany(Exercise);

  Routine.belongsTo(Exercise);
  Exercise.hasMany(Routine);

  User.belongsToMany(Routine, { through: "user_routines" });
  Routine.belongsToMany(User, { through: "user_routines" });
};

module.exports = initModels;
