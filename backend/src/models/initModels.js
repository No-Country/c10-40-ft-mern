const Day = require("./day.models");
const Exercise = require("./exercise.models");
const Routine = require("./routines.models");
const User = require("./users.models");

const initModels = () => {
  User;
  // Exercise;

  Day.belongsToMany(Exercise, { through: "exercise_day" });
  Exercise.belongsToMany(Day, { through: "exercise_day" });

  Routine.belongsToMany(Day, { through: "day_routine" });
  Day.belongsToMany(Routine, { through: "day_routine" });

  User.belongsToMany(Routine, { through: "user_routine" });
  Routine.belongsToMany(User, { through: "user_routine" });
};

module.exports = initModels;
