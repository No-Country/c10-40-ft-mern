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
    name: "Sentadillas",
    series: 4,
    bodyPart: "Piernas",
    repetitions: "12 a 14",
    description:
      "Párate con los pies separados al ancho de los hombros y baja lentamente hasta que tus muslos estén paralelos al suelo. Luego, vuelve a subir lentamente.",
    isCompleted: false,
  },
  {
    name: "Flexiones de brazos",
    series: 4,
    bodyPart: "Pecho y brazos",
    repetitions: "12 a 14",
    description:
      "Ponte en posición de plancha con las manos y los pies en el suelo, con los brazos extendidos. Luego baja el cuerpo hasta que el pecho casi toque el suelo y luego vuelve a subir.",
    isCompleted: false,
  },
  {
    name: "Plancha",
    series: 4,
    bodyPart: "Abdominales y espalda",
    repetitions: "12 a 14",
    description:
      "Coloca tus manos y pies en el suelo, con el cuerpo en línea recta y los músculos abdominales contraídos. Aguanta la posición el mayor tiempo posible.",
    isCompleted: false,
  },
  {
    name: "Zancadas",
    series: 4,
    bodyPart: "Piernas",
    repetitions: "12 a 14",
    description:
      "Da un paso hacia adelante con una pierna y baja el cuerpo hasta que ambas rodillas estén en ángulo recto. Luego, vuelve a la posición inicial y repite con la otra pierna.",
    isCompleted: false,
  },
  {
    name: "Fondos en paralelas",
    series: 4,
    bodyPart: "Tríceps y hombros",
    repetitions: "12 a 14",
    description:
      "Agarra las barras paralelas con las manos y baja el cuerpo hasta que los brazos estén en ángulo recto. Luego, vuelve a subir.",
    isCompleted: false,
  },
  {
    name: "Abdominales bicicleta",
    series: 4,
    bodyPart: "Abdominales",
    repetitions: "12 a 14",
    description:
      "Acuéstate en el suelo con las manos detrás de la cabeza y las rodillas flexionadas. Luego, levanta el pecho y lleva el codo derecho hacia la rodilla izquierda, mientras estiras la pierna derecha. Repite con el otro lado.",
    isCompleted: false,
  },
  {
    name: "Elevación de talones",
    series: 4,
    bodyPart: "Pantorrillas",
    repetitions: "12 a 14",
    description:
      "Ponte de pie con los pies separados al ancho de los hombros y eleva los talones hasta estar de puntillas. Luego baja lentamente.",
    isCompleted: false,
  },
  {
    name: "Dominadas",
    series: 4,
    bodyPart: "Espalda y bíceps",
    repetitions: "12 a 14",
    description:
      "Agarra una barra con las manos en pronación (palmas hacia afuera) y sube el cuerpo hasta que la barbilla esté por encima de la barra. Luego baja lentamente hasta la posición inicial.",
    isCompleted: false,
  },
  {
    name: "Elevación lateral de hombros",
    series: 4,
    bodyPart: "Hombros",
    repetitions: "12 a 14",
    description:
      "Ponte de pie con las mancuernas a los lados, y levanta los brazos hacia los lados hasta que estén paralelos al suelo. Luego baja lentamente.",
    isCompleted: false,
  },
  {
    name: "Curl de bíceps con mancuernas",
    series: 4,
    bodyPart: "Bíceps",
    repetitions: "12 a 14",
    description:
      "Ponte de pie con una mancuerna en cada mano, y levanta los brazos hasta los hombros con las palmas hacia arriba. Luego, baja lentamente las mancuernas.",
    isCompleted: false,
  },
];

async function createDB() {
  // await User.bulkCreate(users);
  await Day.bulkCreate(days);
  await Exercise.bulkCreate(exercises);
}

const getRandomDays = (days, numDays) => {
  const shuffledDays = days.sort(() => 0.5 - Math.random());
  return shuffledDays.slice(0, numDays).map((day) => day.day);
};

async function seedDB() {
  // INFO: crea las tablas en la DB
  await createDB();

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

  // // INFO: las relaciona con algún usuario
  // const user = await User.findAll();
  //
  // user[0].addRoutine(createdRoutine3Days);
  // user[1].addRoutine(createdRoutine5Days);
}

module.exports = seedDB;
