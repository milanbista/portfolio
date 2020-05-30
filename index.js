const express = require("express");
const hbs = require("hbs");

const app = express();

app.set("view engine", "hbs");

//SERVE STATIC FILE
app.use("/static", express.static("public"));

//  HOMEPAGE ENDPOINT
app.get("/", (req, res) => {
  res.render("homePage");
});

// SETUP THE PORT
const port = 3000;
app.listen(port, () => {
  console.log(`listening to port ${port}`);
});
