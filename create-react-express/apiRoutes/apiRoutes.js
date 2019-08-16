const app = require("express").Router();
const user = require("../models/user.js");
const student = require("../models/student.js");
const behavior = require("../models/behavior.js");
const num_behavior = require("../models/num_behavior.js");
const db = require("../models");

///////////////////////////////////////////////DISPLAY INFO//////////////////////////////////////////////////


//get all students to display on home page
app.get("/api/Students/:UserId", function (req, res) {
    db.Student.findAll({ where: { UserId: req.params.UserId } })
        .then(function (dbStudent) {
            res.json(dbStudent)
        });
});

//individual student info
app.get("api/Students/:StudentId", function (req, res) {
    db.Student.findOne({ where: { id: req.body.StudentId } }).then(function (dbStudent) {
        res.json(dbStudent)
    });
});

//get student behavior
app.get("api/Behaviors/:StudentId", function (req, res) {
    db.Behavior.findOne({ where: { StudentId: req.body.StudentId } }).then(function (dbBehavior) {
        res.json(dbBehavior)
    });
});

//get num student behavior
app.get("api/Num_Behaviors/:BehaviorId", function (req, res) {
    db.Num_Behavior.findAll({ where: { BehaviorId: req.body.BehaviorId } }).then(function (dbNum_Behavior) {
        res.json(dbNum_Behavior)
    });
});


//////////////////////////////////////////////CREATE DATA////////////////////////////////////////////

//create user
app.post("/api/User", function (req, res) {
    db.User.create({
        email: req.body.email,
        password: req.body.password
    }).then(response => {
        console.log(response);
    });
});

//create student for user
app.post("/api/Student/:UserId", function (req, res) {
    db.Student.create({
        name: req.body.name,
        classroom_number: req.body.classroom_number,
        age: req.body.age,
        date_of_birth: req.body.date_of_birth,
        teacher_name: req.body.teacher_name,
        bcba_name: req.body.bcba_name,
        UserId: req.params.UserId
    }).then(response => {
        console.log(response);
    });
});

//add behavior for student
app.post("/api/Behavior/:StudentId", function (req, res) {
    db.Student.create({
        name: req.body.name,
        classroom_number: req.body.classroom_number,
        age: req.body.age,
        date_of_birth: req.body.date_of_birth,
        teacher_name: req.body.teacher_name,
        bcba_name: req.body.bcba_name,
        StudentId: req.params.StudentId
    }).then(response => {
        console.log(response);
    });
});

//add number of behaviors for each unique behavior
app.post("/api/behavior/:BehaviorId", function (req, res) {
    db.Student.create({
        num_behavior: req.body.num_behavior,
        notes: req.body.notes,
        BehaviorId: req.params.BehaviorId
    }).then(response => {
        console.log(response);
    });
});


module.exports = app;
