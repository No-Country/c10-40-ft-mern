const ExerciseControllers = require("./exercise.controllers");
const responses = require("../utils/handleResponses");

const getAllExercise = (req, res) => {
  ExerciseControllers.findAllExercise()
    .then((data) => {
      responses.success({
        status: 200,
        data: data,
        message: "Getting all exercises",
        res,
      });
    })
    .catch((err) => {
      responses.error({
        status: 400,
        data: err,
        message: "Something bad getting all Exercise",
        res,
      });
    });
};

const getExerciseById = (req, res) => {
  const { id } = req.params;
  ExerciseControllers.findExerciseById(id)
    .then((data) => {
      if (data) {
        responses.success({
          status: 200,
          data,
          message: `Getting User with id: ${id}`,
          res,
        });
      } else {
        responses.error({
          status: 404,
          message: `User with ID: ${id}, not found`,
          res,
        });
      }
    })
    .catch((err) => {
      responses.error({
        status: 400,
        data: err,
        message: "Something bad getting the user",
        res,
      });
    });
};

const postNewExercise = (req, res) => {
  const userObj = req.body;

  ExerciseControllers.createNewExercise(userObj)
    .then((data) => {
      responses.success({
        status: 201,
        data,
        message: `User created succesfully with id: ${data.id}`,
        res,
      });
    })
    .catch((err) => {
      responses.error({
        status: 400,
        data: err,
        message: "Error ocurred trying to create a new user",
        res,
        fields: {
          name: "string",
          series: "int",
          repetitions: "string",
          description: "string",
        },
      });
    });
};

const patchExercise = (req, res) => {
  const { id } = req.params;
  const userObj = req.body;

  ExerciseControllers.updateExercise(id, userObj)
    .then((data) => {
      if (data) {
        responses.success({
          status: 200,
          data,
          message: `User with id: ${id} modified successfully`,
          res,
        });
      } else {
        responses.error({
          status: 404,
          message: `The user with ID ${id} not found`,
          res,
          fields: {
            firstName: "String",
            email: "example@example.com",
          },
        });
      }
    })
    .catch((err) => {
      responses.error({
        status: 400,
        data: err,
        message: `Error ocurred trying to update user with id ${id}`,
        res,
        fields: {
          firstName: "String",
          email: "example@example.com",
        },
      });
    });
};

const deleteExercise = (req, res) => {
  const { id } = req.params;

  ExerciseControllers.deleteExercise(id)
    .then((data) => {
      if (data) {
        responses.success({
          status: 200,
          data,
          message: `User with id: ${id} deleted successfully`,
          res,
        });
      } else {
        responses.error({
          status: 404,
          data: err,
          message: `The user with ID ${id} not found`,
          res,
        });
      }
    })
    .catch((err) => {
      responses.error({
        status: 400,
        data: err,
        message: `Error ocurred trying to delete user with id ${id}`,
        res,
      });
    });
};

module.exports = {
  getAllExercise,
  postNewExercise,
  patchExercise,
  deleteExercise,
  getExerciseById,
};
