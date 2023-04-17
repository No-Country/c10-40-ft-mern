//*npm init --y `npm i express` `npm i –D nodemon`
const express = require("express");
const app = express();
const responseHandlers = require("./utils/handleResponses");
const db = require("./utils/database");
const initModels = require("./models/initModels");
const config = require("../config").api;
const UsersRouter = require("./users/users.router");
const authRouter = require("./auth/auth.router");
const passport = require("passport");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../workout-tracker-api.json");
//*agrege estas rutas
const dayRouter = require("./day/day.router");
const exerciseRouter = require("./exercise/exercise.router");
const routineRouter = require("./routine/routine.router");
const contactRouter = require("./contact/contact.routes");
const seedDB = require("./utils/createDB");

app.use(
  cors({
    origin: config.client,
  })
);

initModels();

app.use(express.json());
app.use(passport.initialize());

db.authenticate()
  .then(() => console.log("Database authenticated"))
  .catch((err) => console.log(err));

//* NOTE: quitar force true para no resetear la db
db.sync({ force: false, alter: false })
  .then(() => console.log("Database Synced"))
  .catch((err) => console.log(err));

app.use("/api/v1/users", UsersRouter);
app.use("/api/v1/auth", authRouter);
//*estas tambies
app.use("/api/v1/day", dayRouter);
app.use("/api/v1/exercise", exerciseRouter);
app.use("/api/v1/routine", routineRouter);
app.use("/api/v1/contact", contactRouter);

app.get("/", (req, res) => {
  responseHandlers.success({
    res,
    status: 200,
    message: "Servidor inicializado correctamente",
    data: {
      Users: `${config.host}/api/v1/users`,
      Login: `${config.host}/api/v1/auth/login`,
      "Users-id": `${config.host}/api/v1/users/:id`,
      MyUsuario: `${config.host}/api/v1/users/me`,
      Swagger: `${config.host}/api-docs`,
      Exercise: `${config.host}/api/v1/exercise`,
      Routine: `${config.host}/api/v1/routine`,
    },
  });
});

// seedDB();

// Swagger

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("*", (req, res) => {
  responseHandlers.error({
    res,
    status: 404,
    message: `URL not found, please try with ${config.host}`,
  });
});

app.listen(config.port, () => {
  console.log(`Server started at port ${config.port}`);
});
