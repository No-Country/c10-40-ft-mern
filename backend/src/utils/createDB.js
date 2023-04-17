const Exercise = require("../models/exercise.models");
const User = require("../models/users.models");
const Routine = require("../models/routines.models");
const Day = require("../models/day.models");
const createRoutine = require("./createRoutine");

// WARN: EJECUTAR UNA VEZ. O FIXEÁ LOS BUGS

// Sample data for User model
const users = [
  {
    firstName: "maxi",
    email: "arbelaism@outlook.com",
    password: "12345",
  },
  {
    firstName: "maxi2",
    email: "arbelaism@test.com",
    password: "12345",
  },
];

// Sample data for Day model
const days = [
  { day: "monday" },
  { day: "tuesday" },
  { day: "wednesday" },
  { day: "thursday" },
  { day: "friday" },
];

// Sample data for Ejercicio model
const exercises = [
  {
    name: "Push-ups",
    series: 4,
    bodyPart: "tren superior",
    repetitions: "12 a 14",
    description: "somedescription",
    isCompleted: false,
  },
  {
    name: "Squats",
    series: 4,
    bodyPart: "tren inferior",
    repetitions: "12 a 14",
    description: "somedescription",
    isCompleted: false,
  },
  {
    name: "Crunches",
    series: 4,
    bodyPart: "tren inferior",
    repetitions: "12 a 14",
    description: "somedescription",
    isCompleted: false,
  },
  {
    name: "Lunges",
    series: 4,
    bodyPart: "tren superior",
    repetitions: "12 a 14",
    description: "somedescription",
    isCompleted: false,
  },
  {
    name: "Burpees",
    series: 4,
    repetitions: "12 a 14",
    bodyPart: "core",
    description: "somedescription",
    isCompleted: false,
  },
  {
    name: "Plank",
    series: 4,
    repetitions: "12 a 14",
    bodyPart: "core",
    description: "somedescription",
    isCompleted: false,
  },
  {
    name: "Pull-ups",
    series: 4,
    repetitions: "12 a 14",
    bodyPart: "core",
    description: "somedescription",
    isCompleted: false,
  },
  {
    name: "Leg curls",
    series: 4,
    repetitions: "12 a 14",
    description: "somedescription",
    bodyPart: "piernas",
    isCompleted: false,
  },
  {
    name: "Dumbbell press",
    series: 4,
    repetitions: "12 a 14",
    description: "somedescription",
    bodyPart: "brazos",
    isCompleted: false,
  },
  {
    name: "Bicep curls",
    series: 4,
    repetitions: "12 a 14",
    description: "somedescription",
    bodyPart: "cabeza",
    isCompleted: false,
  },
];

async function createDB() {
  await User.bulkCreate(users);
  await Day.bulkCreate(days);
  await Exercise.bulkCreate(exercises);
}

const getRandomDays = (days, numDays) => {
  const shuffledDays = days.sort(() => 0.5 - Math.random());
  return shuffledDays.slice(0, numDays).map((day) => day.day);
};

async function seedDB() {
  // INFO: crea las tablas en la DB
  // await createDB();

  // INFO: crea las rutinas en la DB
  const createdRoutine2Days = await createRoutine(
    "2 days",
    2,
    getRandomDays(days, 2)
  );
  const createdRoutine3Days = await createRoutine(
    "3 days",
    3,
    getRandomDays(days, 3)
  );
  const createdRoutine5Days = await createRoutine(
    "5 days",
    5,
    getRandomDays(days, 5)
  );

  // INFO: las relaciona con algún usuario
  const user = await User.findAll();

  user[0].addRoutine(createdRoutine3Days);
  user[1].addRoutine(createdRoutine5Days);
}

module.exports = seedDB;
