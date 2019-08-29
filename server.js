const express = require("express");
const path = require("path");

///////////////auth///////////////////////////////////
// const bodyParser = require('body-parser');
// const jwt = require('jsonwebtoken');

// const passport = require('passport');
// const passportJWT = require('passport-jwt');
const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require("./apiRoutes/apiRoutes.js");

// let ExtractJwt = passportJWT.ExtractJwt;
// let JwtStrategy = passportJWT.Strategy;

// let jwtOptions = {};
// jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
// jwtOptions.secretOrKey = 'wowwow';

// // lets create our strategy for web token
// let strategy = new JwtStrategy(jwtOptions, function(jwt_payload, next) {
//   console.log('payload received', jwt_payload);
//   let user = getUser({ id: jwt_payload.id });

//   if (user) {
//     next(null, user);
//   } else {
//     next(null, false);
//   }
// });
// // use the strategy
// passport.use(strategy);

// // initialize passport with express
// app.use(passport.initialize());

// // parse application/json
// app.use(bodyParser.json());
// //parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: true }));


//////////////////////////////////////////auth///

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// app.use(express.static("./public"));

app.use(apiRoutes);
const db = require("./models");


app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});


db.sequelize.sync().then(function () {
  app.listen(PORT, () => {
    console.log("Server listening on http://localhost:" + PORT)

  });
});