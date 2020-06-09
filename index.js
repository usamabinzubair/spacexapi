const hbs = require("express-handlebars");
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
// require("dotenv").config();

const router = require("./routes/router");

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", router);

app.engine(
  ".hbs",
  hbs({
    defaultLayout: "layout",
    extname: ".hbs"
  })
);

app.set("view engine", ".hbs");

app.listen(3000, () => {
  console.log("server listening on port 3000");
});
