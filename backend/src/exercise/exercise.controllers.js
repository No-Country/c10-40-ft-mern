const BodyPart = require("../models/bodyPart.models");
const Exercise = require("../models/exercise.models");

const findAllExercise = async () => {
  const data = await Exercise.findAll({
    include: {
      model: BodyPart,
    },
    attributes: {
      exclude: ["createdAt", "updatedAt"],
    },
  });
  return data;
};

const findExerciseById = async (id) => {
  const data = await Exercise.findOne({
    where: {
      id,
    },
    attributes: {
      exclude: ["createdAt", "updatedAt"],
    },
  });
  return data;
};

const createNewExercise = async (userObj, id) => {
  const data = await Exercise.create({
    name: userObj.name,
    series: userObj.series,
    repetitions: userObj.repetitions,
    description: userObj.description,
    BodyPartId: id, //tienes que espeCificar el id de la parte del cuerpo
  });

  return data;
};

const updateExercise = async (id, userObj) => {
  const data = await Exercise.update(userObj, {
    where: {
      id,
    },
  });

  return data[0];
};

const deleteExercise = async (id) => {
  const data = await Exercise.destroy({
    where: {
      id,
    },
  });

  return data;
};

module.exports = {
  findAllExercise,
  createNewExercise,
  updateExercise,
  deleteExercise,
  findExerciseById,
};
