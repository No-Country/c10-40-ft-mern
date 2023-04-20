const Exercise = require("../models/exercise.models");

const findAllExercise = async () => {
  const data = await Exercise.findAll();

  return data;
};

const findExerciseById = async (id) => {
  const data = await Exercise.findOne({
    where: {
      id,
    },
  });
  return data;
};

const createNewExercise = async (userObj) => {
  const data = await Exercise.create({
    name: userObj.name,
    series: userObj.series,
    repetitions: userObj.repetitions,
    description: userObj.description,
    bodyPart: userObj.bodyPart,
    imageUrl: userObj.imageUrl,
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
