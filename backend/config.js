//*gestionando mis variables de entorno
// "npm i dotenv" habilita entrar a las ariables de entorno -.env-

require("dotenv").config();

const configs = {
  api: {
    port: process.env.PORT || 8080,
    host: process.env.HOST || "http://localhost:8080",
    client: process.env.CLIENT || "http://localhost:5173",
    nodeEnv: process.env.NODE_ENV || "development",
    secretOrKey: process.env.JWT_SECRET,
    google: {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL,
    },
    facebook: {
      clientID: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    },
    sessionSecret: process.env.SESSION_SECRET || "session_secret",
  },
  db: {
    development: {
      //? Aqui deberan estar las configuraciones para la conexion con sequelize
      dialect: "postgres",
      host: process.env.DB_HOST || "localhost",
      port: process.env.DB_PORT || "5432",
      username: process.env.DB_USER || "postgres",
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      define: {
        timestamps: true, //? Nos obliga a que todas las tablas tengan la propiedad createdAt y upadtedAt
        underscored: true,
        underscoredAll: true,
      },
    },

    production: {
      //? Aqui deberan estar las configuraciones para la conexion con sequelize
      dialect: "postgres",
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      define: {
        timestamps: true, //? Nos obliga a que todas las tablas tengan la propiedad createdAt y upadtedAt
        underscored: true,
        underscoredAll: true,
      },
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false,
        },
      },
    },
    testing: {
      //? Aqui deberan estar las configuraciones para la conexion con sequelize
      dialect: "postgres",
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      define: {
        timestamps: true, //? Nos obliga a que todas las tablas tengan la propiedad createdAt y upadtedAt
        underscored: true,
        underscoredAll: true,
      },
    },
  },
  nodemailer: {
    service: process.env.NODEMAILER_GMAIL_SERVICE,
    port: process.env.NODEMAILER_GMAIL_PORT,
    auth: {
      user: process.env.NODEMAILER_GMAIL_MAIL,
      pass: process.env.NODEMAILER_GMAIL_PASS,
    },
  },
};

module.exports = configs;
