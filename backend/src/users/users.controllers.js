const Users = require("../models/users.models");
const uuid = require("uuid");
const { hashPassword } = require("../utils/crypto");
const Routine = require("../models/routines.models");
const Day = require("../models/day.models");
const Exercise = require("../models/exercise.models");

const findAllUser = async () => {
  const data = await Users.findAll({
    attributes: { exclude: ["password", "createdAt", "updatedAt"] },
    include: [
      {
        model: Routine,
        attributes: { exclude: ["user_routine"] },
        include: [
          {
            model: Day,
            attributes: { exclude: ["day_routine"] },
            include: [
              {
                model: Exercise,
                attributes: { exclude: ["exercise_day"] },
              },
            ],
          },
        ],
      },
    ],
  });
  return data;
};

const findUserById = async (id) => {
  const data = await Users.findOne({
    where: {
      id,
    },
    attributes: {
      exclude: ["password", "createdAt", "updatedAt"],
    },
  });
  return data;
};

const findUserByEmail = async (email) => {
  const data = await Users.findOne({
    where: {
      email,
    },
  });
  return data;
};

const createNewUser = async (userObj) => {
  const newUser = {
    id: uuid.v4(),
    firstName: userObj.firstName,
    email: userObj.email,
    password: hashPassword(userObj.password),
  };
  const data = await Users.create(newUser);
  return data;
};

const updateUser = async (id, userObj) => {
  //data === 1
  const data = await Users.update(userObj, {
    where: {
      id,
    },
  });
  return data[0];
};

const deleteUser = async (id) => {
  const data = await Users.destroy({
    where: {
      id,
    },
  });
  return data;
};

/* INFO: Add new routine in the user table
 * note the addRoutine method provided by sequelize associations methods
 * https://sequelize.org/docs/v6/core-concepts/assocs/#special-methodsmixins-added-to-instances
 */

const addUserRoutine = async (userId, routineId) => {
  const routine = await Routine.findOne({ where: { id: routineId } });
  const user = await Users.findOne({ where: { id: userId } });

  const data = await user.addRoutine(routine, {
    through: { isCompleted: false },
  });

  return data;
};

module.exports = {
  findAllUser,
  findUserById,
  findUserByEmail,
  createNewUser,
  updateUser,
  deleteUser,
  addUserRoutine,
};
