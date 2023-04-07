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
const cuerpoRouter = require('./cuerpo/cuerpo.routes')
const rutinaRouter = require('./rutina/rutina.router')
app.use(
    cors({
        origin: config.client,
    })
);

app.use(express.json());
app.use(passport.initialize());

db.authenticate()
    .then(() => console.log("Database authenticated"))
    .catch((err) => console.log(err));

db.sync()
    .then(() => console.log("Database Synced"))
    .catch((err) => console.log(err));

initModels();

app.use("/api/v1/users", UsersRouter);
app.use("/api/v1/auth", authRouter);
//*estas tambies
app.use("/api/v1/cuerpo", cuerpoRouter );
app.use("/api/v1/rutina", rutinaRouter );

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
            Cuerpo: `${config.host}/api/v1/cuerpo`,
            rutina: `${config.host}/api/v1/rutina`
        },
    });
});

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
