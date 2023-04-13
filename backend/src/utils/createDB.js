const BodyPart = require("../models/bodyPart.models");
const Exercise = require("../models/exercise.models");
const User = require("../models/users.models");
const Routine = require("../models/routines.models");

async function createDB() {
  await User.bulkCreate([
    {
      firstName: "maxi",
      email: "arbelaism@outlook.com",
      password: "12345",
    },
    {
      firstName: "maxi2",
      email: "arbelaism@test.com",
      password: "12345",
    },
  ]);

  await BodyPart.bulkCreate([
    {
      name: "tren superior",
    },
    {
      name: "tren inferior",
    },
    {
      name: "core",
    },
  ]);

  await Exercise.bulkCreate([
    {
      name: "abdominales",
      series: 4,
      repetitions: "10 a 12",
      description: "descripción del ejercicio",
      bodyPartId: 3,
    },
    {
      name: "flexiones cerradas",
      series: 4,
      repetitions: "10 a 12",
      description: "descripción del ejercicio",
      bodyPartId: 1,
    },
  ]);

  await Routine.bulkCreate([
    {
      weekDay: "monday",
      exerciseId: 1,
      userId: "924b99be-b786-4281-832a-5d83771d2cfb",
    },
    {
      weekDay: "tuesday",
      exerciseId: 2,
      userId: "924b99be-b786-4281-832a-5d83771d2cfb",
    },
  ]);
}

module.exports = createDB;
