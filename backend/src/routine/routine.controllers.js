const User = require("../models/users.models");
const Routine = require("../models/routines.models");
const Exercise = require("../models/exercise.models");
const BodyPart = require("../models/bodyPart.models");

const findAllRoutines = async () => {
  const data = await Routine.findAll({
    include: {
      model: Exercise,
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
      include: {
        model: BodyPart,
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      },
    },
    attributes: {
      exclude: ["createdAt", "updatedAt"],
    },
  });

  return data;
};

const findRoutineById = async (id) => {
  const data = await Routine.findOne({
    where: {
      id,
    },
    attributes: {
      exclude: ["createdAt", "updatedAt"],
    },
  });

  return data;
};

const createNewRoutine = async (userObj, id, exerciseId) => {
  const data = await Routine.create({
    name: userObj.weekDays,
    exerciseId: exerciseId,
    userId: id,
  });

  return data;
};

// const updateExercise = async (id, userObj) => {
//   const data = await Routine.update(userObj, {
//     where: {
//       id,
//     },
//   });
//
//   return data[0];
// };

const deleteRoutine = async (id) => {
  const data = await Routine.destroy({
    where: {
      id,
    },
  });

  return data;
};

module.exports = {
  findAllRoutines,
  createNewRoutine,
  deleteRoutine,
  findRoutineById,
};
