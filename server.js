require("dotenv").config();

const database = require("./configs/database");

//PASO 2: Importar los paquetes que hemos instalado
const chalk = require("chalk");
const express = require("express");
const logger = require("morgan");
const path = require("path");
const bcrypt = require("bcryptjs");
const flash = require("connect-flash");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");

const PORT = process.env.PORT || 5000;

const app = express();

// Middleware Setup
app.use(express.static(path.join(__dirname, "build")));
app.use(logger("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

//PASO 3: Configurar el middleware de Session
app.use(
  session({
    secret: process.env.SECRET,
    resave: true,
    saveUninitialized: true,
  })
);

//PASO 4: Configurar la serialización del usuario
passport.serializeUser((user, callback) => {
  callback(null, user.id);
});

//PASO 5: Configuar la deserialización del usuario
passport.deserializeUser((id, callback) => {
  database
    .promise()
    .query("SELECT * FROM users WHERE id = ?", [id])
    .then((result) => {
      callback(null, result);
    })
    .catch((err) => {
      callback(err);
    });
});

//PASO 6: Configurar el middleware de flash
app.use(flash());

//PASO 7: Configurar el middleware del Strategy
passport.use(
  new LocalStrategy(
    {
      usernameField: "username",
      passwordField: "password",
      passReqToCallback: true,
    },
    (req, username, password, next) => {
      // console.log(username, password);
      database
        .promise()
        .query("SELECT * FROM users WHERE username = ?", [username])
        .then((userInfo) => {
          // console.log(userInfo[0][0])
          if (userInfo[0].length === 0) {
            //Si el usuario no existe
            return next(null, false, { message: "Incorrect username or password." });
          }

          if (!bcrypt.compareSync(password, userInfo[0][0].password)) {
            //Si la contraseña no coincide
            return next(null, false, { message: "Incorrect username or password." });
          }

          return next(null, userInfo[0][0]);
        })
        .catch((err) => {
          next(err);
        });
    }
  )
);

//PASO 10: Configuar middleware de passport
app.use(passport.initialize());
app.use(passport.session());

// ROUTES
app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/sneakers", require("./routes/sneakers.routes"));

//Middleware for build folder
app.use((req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// APP LISTENER
app.listen(PORT, () => {
  console.log(chalk.cyan(`Connected to port ${PORT}`));
});
