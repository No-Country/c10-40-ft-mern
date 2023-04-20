const DayControllers = require("./day.controllers");
const responses = require("../utils/handleResponses");

const getAllDays = (_req, res) => {
  DayControllers.findAllDay()
    .then((data) => {
      responses.success({
        status: 200,
        data: data,
        message: "Getting all Days",
        res,
      });
    })
    .catch((err) => {
      responses.error({
        status: 400,
        data: err,
        message: "Something bad getting all Days",
        res,
      });
    });
};

const getDayByName = (req, res) => {
  const { day } = req.params;
  DayControllers.findDayByName(day)
    .then((data) => {
      if (data) {
        responses.success({
          status: 200,
          data,
          message: `Getting ${day}`,
          res,
        });
      } else {
        responses.error({
          status: 404,
          message: `${day}, not found`,
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

const patchDayName = (req, res) => {
  const { day } = req.body;
  const { id } = req.params;
  DayControllers.patchDayName(day, id)
    .then((data) => {
      console.log(data);
      if (data[0] === 1) {
        responses.success({
          status: 200,
          data,
          message: `Updated ${day}`,
          res,
        });
      } else {
        responses.error({
          status: 404,
          message: `${day}, not found`,
          res,
        });
      }
    })
    .catch((err) => {
      responses.error({
        status: 400,
        data: err,
        message: "Something bad getting the day patch",
        res,
      });
    });
};

module.exports = {
  getAllDays,
  getDayByName,
  patchDayName,
};
