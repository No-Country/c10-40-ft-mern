const Routine = require("../models/routines.models");
const Exercise = require("../models/exercise.models");
const Day = require("../models/day.models");

const findRandomExercise = async () => {
  const count = await Exercise.count();
  const randomIndex = Math.floor(Math.random() * count);
  const exercise = await Exercise.findOne({ offset: randomIndex });
  return exercise;
};

/**INFO: creá rutinas dinámicamente.
 *
 * FIX: error creating multiple exercises in one day when you call the function twice with the same name
 *
 * @params: (
 * name: String  Nombre de la rutina
 * days: Number número de días
 * weekDays: Array(weekDays) Nombre de la rutina
 * )
 *
 */

async function createRoutine(name, days, weekDays) {
  const createRoutine = await Routine.findOrCreate({
    where: { name: name, daysNumber: days, isCompleted: false },
  });

  const routine = createRoutine[0];

  const daysCreated = await Day.findAll({
    where: {
      day: weekDays,
    },
  });

  await createRoutine[0].addDays(daysCreated);

  daysCreated.forEach(async (day) => {
    const randomExercise = await findRandomExercise();

    await day.addExercise(randomExercise);
  });

  const res = await Routine.findByPk(routine.id, {
    include: {
      model: Day,
      attributes: {
        exclude: ["day_routine"],
      },
      include: {
        model: Exercise,
        attributes: {
          exclude: ["exercise_day"],
        },
      },
    },
  });

  return res;
}

module.exports = createRoutine;
