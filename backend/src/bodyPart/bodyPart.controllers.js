const BodyPart = require("../models/bodyPart.models");
const Exercise = require("../models/exercise.models");

const findAllBodyPart = async () => {
  const data = await BodyPart.findAll({
    include: {
      model: Exercise,
      attributes: {
        exclude: ["id", "createdAt", "updatedAt", "BodyPartId"],
      },
    },
    attributes: {
      exclude: ["id", "createdAt", "updatedAt"],
    },
  });
  return data;
};

const findBodyPartById = async (id) => {
  const data = await BodyPart.findOne({
    where: {
      id: id,
    },
    include: {
      model: Exercise,
      attributes: {
        exclude: ["id", "createdAt", "updatedAt", "BodyPartId"],
      },
    },
    attributes: {
      exclude: ["createdAt", "updatedAt"],
    },
  });
  return data;
};

const createNewBodyPart = async (name) => {
  const data = await BodyPart.create({ name });
  return data;
};

const updateBodyPart = async (id, name) => {
  const data = await BodyPart.update(
    { name },
    {
      where: {
        id,
      },
    }
  );
  return data[0];
};

const deleteBodyPart = async (id) => {
  const data = await BodyPart.destroy({
    where: {
      id,
    },
  });
  return data;
};

module.exports = {
  findAllBodyPart,
  createNewBodyPart,
  updateBodyPart,
  deleteBodyPart,
  findBodyPartById,
};
