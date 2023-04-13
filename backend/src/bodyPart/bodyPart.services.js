const BodyPartControllers = require("./bodyPart.controllers");
const responses = require("../utils/handleResponses");

const getAllBodyPart = (req, res) => {
  BodyPartControllers.findAllBodyPart()

    .then((data) => {
      responses.success({
        status: 200,
        data: data,
        message: "Getting all body",
        res,
      });
    })
    .catch((err) => {
      responses.error({
        status: 400,
        data: err,
        message: "Something wrong with getting all the body parts",
        res,
      });
    });
};

const getBodyPartById = (req, res) => {
  const { id } = req.params;
  BodyPartControllers.findBodyPartById(id)
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

const postNewBodyPart = (req, res) => {
  const { name } = req.body;
  BodyPartControllers.createNewBodyPart(name)
    .then((data) => {
      responses.success({
        status: 201,
        data,
        message: `body created succesfully with id: ${data.id}`,
        res,
      });
    })
    .catch((err) => {
      responses.error({
        status: 400,
        data: err,
        message: "Error ocurred trying to create a new body",
        res,
        fields: {
          name: "String",
        },
      });
    });
};

const patchBodyPart = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  BodyPartControllers.updateBodyPart(id, name)
    .then((data) => {
      if (data) {
        responses.success({
          status: 200,
          data,
          message: `body with id: ${id} modified successfully`,
          res,
        });
      } else {
        responses.error({
          status: 404,
          message: `The body with ID ${id} not found`,
          res,
          fields: {
            name: "String",
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
          name: "String",
        },
      });
    });
};

const deleteBodyPart = (req, res) => {
  const { id } = req.params;

  BodyPartControllers.deleteBodyPart(id)
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
  getAllBodyPart,
  postNewBodyPart,
  patchBodyPart,
  deleteBodyPart,
  getBodyPartById,
};
