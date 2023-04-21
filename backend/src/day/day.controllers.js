const Day = require("../models/day.models");

const findAllDay = async () => {
  const data = await Day.findAll();

  return data;
};

const findDayByName = async (day) => {
  const data = await Day.findOne({
    where: {
      day,
    },
  });

  return data;
};

const patchDayName = async (day, id) => {
  const data = await Day.update(
    {
      day,
    },
    {
      where: {
        id,
      },
    }
  );

  return data;
};

module.exports = {
  findAllDay,
  findDayByName,
  patchDayName,
};
