const rutinaControllers = require("./rutina.controllers");
const responses = require("../utils/handleResponses");

const getAllRutina = (req, res) => {
  rutinaControllers
    .findAllRutina()
    .then((data) => {
      responses.success({
        status: 200,
        data: data,
        message: "Getting all Rutina",
        res,
      });
    })
    .catch((err) => {
      responses.error({
        status: 401,
        data: err,
        message: "Something bad getting all Rutina",
        res,
      });
    });
};

const getRutinayId = (req, res) => {
  const { id } = req.params;
  rutinaControllers
    .findRutinaById(id)
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

const postNewRutina = (req, res) => {
  const userObj = req.body;
  const { id } = req.params;

  rutinaControllers
    .createNewRutina(userObj, id)
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
        message: "Error ocurred trying to create a new Routine",
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

const patchRutina = (req, res) => {
  const { id } = req.params;
  const userObj = req.body;

  rutinaControllers
    .updateRutina(id, userObj)
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

const deleteRutina = (req, res) => {
  const { id } = req.params;

  rutinaControllers
    .deleteRutina(id)
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
  getAllRutina,
  postNewRutina,
  patchRutina,
  deleteRutina,
  getRutinayId,
};
