const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const app = require("express").Router();
const user = require("../models/user.js");
const student = require("../models/student.js");
const behavior = require("../models/behavior.js");
const num_behavior = require("../models/num_behavior.js");
const db = require("../models");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

// router.post("/register", (req, res) => {
//   // Form validation

//   app.get("/api/login/email", function (req, res) {
//     db.User.findOne({ where: { email: req.body.email } })
//         .then(function (user) {
//             if (user) {
//                 return res.status(400).json({ email: "Email already exists" });
//               } else {
//                 const newUser = new User({
//                   email: req.body.email,
//                   password: req.body.password
//                 })
//             }
//     })
// }

// bcrypt.genSalt(10, (err, salt) => {
//     bcrypt.hash(newUser.password, salt, (err, hash) => {
//       if (err) throw err;
//       newUser.password = hash;
//       newUser
//         .save()
//         .then(user => res.json(user))
//         .catch(err => console.log(err));
//     });
//   })

// // Hash password before saving in database
//       bcrypt.genSalt(10, (err, salt) => {
//         bcrypt.hash(newUser.password, salt, (err, hash) => {
//           if (err) throw err;
//           newUser.password = hash;
//           newUser
//             .save()
//             .then(user => res.json(user))
//             .catch(err => console.log(err));
//         });
//       });

// }
///////////////////////////////////////////////DISPLAY INFO//////////////////////////////////////////////////

//get all students to display on home page
app.get("/api/Students/:UserId", function(req, res) {
  db.Student.findAll({ where: { UserId: req.params.UserId } }).then(function(
    dbStudent
  ) {
    return res.json(dbStudent);
  });
});

//individual student info
app.get("/api/oneStudent/:id", function(req, res) {
  db.Student.findOne({ where: { id: req.params.id } }).then(function(
    dbStudent
  ) {
    return res.json(dbStudent);
  });
});

//get student behavior
app.get("/api/Behaviors/:StudentId", function(req, res) {
  db.Behavior.findAll({ where: { StudentId: req.params.StudentId } }).then(
    function(dbBehavior) {
      return res.json(dbBehavior);
    }
  );
});

//get num student behavior
app.get("/api/Num_Behaviors/:StudentId", function(req, res) {
  db.Num_Behavior.findAll({
    where: {
      StudentId: req.params.StudentId,
      createdAt: {
        [Op.gte]: new Date(new Date() - 24 * 60 * 60 * 1000)
      } // square brackets are needed for property names that aren't plain strings
    }
  }).then(function(dbNum_Behavior) {
    return res.json(dbNum_Behavior);
  });
});

// app.get("/api/Num_Behaviors_Join/:StudentId", (req, res) => {
//         db.sequelize.query(`SELECT * FROM num_behaviors nb JOIN behaviors b ON b.id = nb.BehaviorId WHERE nb.StudentId = ?`,
//             {
//                 replacements: [req.params.StudentId], type: db.sequelize.QueryTypes.SELECT
//             }).then(response => {
//             console.log(response))
// }})

app.get("/api/Num_Behaviors_Join/:StudentId", (req, res) => {
  db.sequelize
    .query(
      `SELECT * FROM num_behaviors nb JOIN behaviors b ON b.id = nb.BehaviorId WHERE nb.StudentId = ?`,
      {
        replacements: [req.params.StudentId],
        type: db.sequelize.QueryTypes.SELECT
      }
    )
    .then(function(dbNum_Behavior) {
      return res.json(dbNum_Behavior);
    });
});

//////////////////////////////////////////////CREATE DATA////////////////////////////////////////////

//create user//////////////////
app.post("/api/User", function(req, res) {
  db.User.create({
    email: req.body.email,
    password: req.body.password
  }).then(response => {
    console.log(response);
    return res.json(response);
  });
});
////////////////////////////////
// app.post('/api/User', function(req, res, next) {
//   const { email, password } = req.body;
//   createUser({ email, password }).then(User =>
//     res.json({ User, msg: 'account created successfully' })
//   );
// });

// //login route
// app.post('/api/login', async function(req, res, next) {
//   const { email, password } = req.body;
//   if (email && password) {
//     let User = await getUser({ email: email });
//     if (!User) {
//       res.status(401).json({ message: 'No such user found' });
//     }
//     if (User.password === password) {
//       // from now on we'll identify the user by the id and the id is the
//       // only personalized value that goes into our token
//       let payload = { id: User.id };
//       let token = jwt.sign(payload, jwtOptions.secretOrKey);
//       res.json({ msg: 'ok', token: token });
//     } else {
//       res.status(401).json({ msg: 'Password is incorrect' });
//     }
//   }
// });

// // protected route
// app.get('/api/protected', passport.authenticate('jwt', { session: false }), function(req, res) {
//   res.json('Success! You can now see this without a token.');
// });

////////////////////////auth//////////////////////////

//create student for user
app.post("/api/Student/:UserId", function(req, res) {
  db.Student.create({
    name: req.body.name,
    classroom_number: req.body.classroom_number,
    age: req.body.age,
    date_of_birth: req.body.date_of_birth,
    teacher_name: req.body.teacher_name,
    bcba_name: req.body.bcba_name,
    image: req.body.image,
    UserId: req.params.UserId
  }).then(response => {
    return res.json(response);
  });
});

app.post("/api/Student/delete/:id", function(req, res) {
  db.Student.destroy({
    where: {
      id: req.params.id
    }
  }).then(function(dbStudent) {
    return res.json(dbStudent);
  });
});

//add behavior for student
app.post("/api/Behavior/:StudentId", function(req, res) {
  db.Behavior.create({
    type: req.body.type,
    StudentId: req.params.StudentId
  }).then(response => {
    return res.json(response);
  });
});

//add number of behaviors for each unique behavior
app.post("/api/num_behavior/:BehaviorId/:StudentId", function(req, res) {
  const today = new Date();
  const todayHour = today.getHours();

  db.Num_Behavior.create({
    num_behavior: req.body.num_behavior,
    BehaviorId: req.params.BehaviorId,
    StudentId: req.params.StudentId,
    date: todayHour
  }).then(response => {
    return res.json(response);
  });
});

module.exports = app;
