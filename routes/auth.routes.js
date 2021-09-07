const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const passport = require("passport");
const database = require("../configs/database");

//Middleware for handle auth
// const checkForAuth = (req, res, next)=>{
//   if(req.isAuthenticated()){
//     return next()
//   } else {
//     res.redirect('/login')
//   }
// }

// ERRORS HANDLER route
router.get("/errors", (req, res) => {
  res.send({ message: req.flash("error")[0] });
});

// Check if auth
router.get("/check-auth", (req, res) => {
  if (req.isAuthenticated()) {
    res.send(req.user[0][0]);
  } else {
    res.send({});
  }
});

/* GET signup page */
router.get("/signup", (req, res) => {
  res.send("signup");
});

/* POST signup */
router.post("/signup", (req, res) => {
  const { username, password } = req.body;

  //Que el usuario y contraseña no estén vacíos
  if (username === "" || password === "") {
    res.send({
      message: "Tienes que rellenar todos los campos",
    });
  }
  //Que el usuario que intentas crear no exista ya
  database
    .promise()
    .query("SELECT * FROM users WHERE username = ?", [username])
    .then((userInfo) => {
      if (userInfo[0].length > 0) {
        //El usuario ya existe
        res.send({ message: "Este usuario ya existe" });
      } else {
        //El usuario no existe, por lo tanto puedo crearlo
        const hashedPassword = bcrypt.hashSync(password, 10);
        // User.create({ username, password: hashedPassword })
        database
          .promise()
          .query("INSERT INTO users (username, password) VALUES (?, ?)", [username, hashedPassword])
          .then(() => {
            res.send({});
          });
      }
    })
    .catch((err) => {
      res.send(err);
    });
});

/* POST login page */
router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/api/auth/check-auth",
    failureRedirect: "/api/auth/errors",
    failureFlash: true,
    passReqToCallback: true,
  })
);

/* POST logout page */
router.post("/logout", (req, res) => {
  req.logout();
  res.redirect("/api/auth/check-auth");
});


module.exports = router;
