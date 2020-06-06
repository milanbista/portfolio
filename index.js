const express = require("express");
const hbs = require("hbs");
const env = require("dotenv").config;

const app = express();

app.set("view engine", "hbs");

//SERVE STATIC FILE
app.use("/static", express.static("public"));

//HOMEPAGE ROUTE
app.get("/", (req, res) => {
  res.render("homePage");
});

//RESUME ROUTE
app.get("/resume", (req, res) => {
  res.render("resume");
});

//SETUP THE PORT
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listening to port ${port}`);
});
