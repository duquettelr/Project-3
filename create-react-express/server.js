const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require("./apiRoutes/apiRoutes.js");

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