const cuerpoControllers = require("./cuerpo.controllers");
const responses = require("../utils/handleResponses");

const getAllCuerpo = (req, res) => {
  cuerpoControllers.findAllCuerpo()
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
        status: 401,
        data: err,
        message: "Something wrong with getting all the body parts",
        res,
      });
    });
};

const getCuerpoyId = (req, res) => {
  const { id } = req.params;
  cuerpoControllers.findCuerpoById(id)
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

const postNewCuerpo = (req, res) => {
  const {name} = req.body
  cuerpoControllers.createNewCuerpo(name)
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
          name: "String"
        },
      });
    });
};

const patchCuerpo = (req, res) => {
  const { id } = req.params;
  const {name} = req.body;

  cuerpoControllers.updateCuerpo(id, name)
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
            name: "String"
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

const deleteCuerpo = (req, res) => {
  const { id } = req.params;

  cuerpoControllers.deleteCuerpo(id)
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

//*peticiones de Front
const getId2d = (req, res) => {
  cuerpoControllers.findCuerpoByname()
    .then((data) => {
      if (data) {
        responses.success({status: 200,data,message: `Getting User with id`,res,});
      } else {
        responses.error({status: 404,message: `User with ID not found`,res,});
      }
    })
    .catch((err) => {responses.error({status: 400,data: err,message: "Something bad getting the user",res,});});
};

const getId3d = (req, res) => {
  cuerpoControllers.findCuerpoByname3d()
    .then((data) => {
      if (data) {
        responses.success({status: 200,data,message: `Getting User with id`,res,});
      } else {
        responses.error({status: 404,message: `User with ID not found`,res,});
      }
    })
    .catch((err) => {responses.error({status: 400,data: err,message: "Something bad getting the user",res,});});
};


module.exports = {
  getAllCuerpo,
  postNewCuerpo,
  patchCuerpo,
  deleteCuerpo,
  getCuerpoyId,
  getId2d,
  getId3d
};
