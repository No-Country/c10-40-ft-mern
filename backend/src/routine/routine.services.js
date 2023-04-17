const RoutineControllers = require("./routine.controllers");
const responses = require("../utils/handleResponses");

const getAllRoutine = (req, res) => {
  RoutineControllers.findAllRoutines()
    .then((data) => {
      responses.success({
        status: 200,
        data: data,
        message: "Getting all Routines",
        res,
      });
    })
    .catch((err) => {
      responses.error({
        status: 400,
        data: err,
        message: "Something bad getting all Routines",
        res,
      });
    });
};

const getRoutineById = (req, res) => {
  const { id } = req.params;
  RoutineControllers.findRoutineById(id)
    .then((data) => {
      if (data) {
        responses.success({
          status: 200,
          data,
          message: `Getting Routine with id: ${id}`,
          res,
        });
      } else {
        responses.error({
          status: 404,
          message: `Routine with ID: ${id}, not found`,
          res,
        });
      }
    })
    .catch((err) => {
      responses.error({
        status: 400,
        data: err,
        message: "Something bad getting the routine",
        res,
      });
    });
};

const postNewRoutine = (req, res) => {
  const userObj = req.body;
  const { id } = req.params;

  RoutineControllers.createNewRoutine(userObj, id)
    .then((data) => {
      responses.success({
        status: 201,
        data,
        message: `Routine created succesfully with id: ${data.id}`,
        res,
      });
    })
    .catch((err) => {
      responses.error({
        status: 400,
        data: err,
        message: "Error ocurred trying to create a new routine",
        res,
        // FIX: set correct fields
        // fields: {
        //   name: "string",
        // },
      });
    });
};

// const patchRoutine = (req, res) => {
//   const { id } = req.params;
//   const userObj = req.body;
//
//   RoutineControllers.(id, userObj)
//     .then((data) => {
//       if (data) {
//         responses.success({
//           status: 200,
//           data,
//           message: `User with id: ${id} modified successfully`,
//           res,
//         });
//       } else {
//         responses.error({
//           status: 404,
//           message: `The user with ID ${id} not found`,
//           res,
//           fields: {
//             firstName: "String",
//             email: "example@example.com",
//           },
//         });
//       }
//     })
//     .catch((err) => {
//       responses.error({
//         status: 400,
//         data: err,
//         message: `Error ocurred trying to update user with id ${id}`,
//         res,
//         fields: {
//           firstName: "String",
//           email: "example@example.com",
//         },
//       });
//     });
// };

const deleteRoutine = (req, res) => {
  const { id } = req.params;

  RoutineControllers.deleteRoutine(id)
    .then((data) => {
      if (data) {
        responses.success({
          status: 200,
          data,
          message: `Routine with id: ${id} deleted successfully`,
          res,
        });
      } else {
        responses.error({
          status: 404,
          data: err,
          message: `The routine with ID ${id} not found`,
          res,
        });
      }
    })
    .catch((err) => {
      responses.error({
        status: 400,
        data: err,
        message: `Error ocurred trying to delete routine with id ${id}`,
        res,
      });
    });
};

module.exports = {
  getAllRoutine,
  postNewRoutine,
  deleteRoutine,
  getRoutineById,
};
