const express = require("express");
const app = express();
const port = 2620;
const path = require("path");
const expressLayouts = require("express-ejs-layouts");

// DATABASE CONNECTION USING MONGOOSE
const db = require("./config/mongoose");

// TO PUT AlL ENTERED VALUES IN BODY KEY
app.use(express.urlencoded({ extended: true }));

// PATH FOR ASSETS
app.use(express.static(path.join(__dirname, "assets")));
app.use(expressLayouts);

// EXTRACT STYLE AND SCRIPTS FROM SUB PAGES FROM THE LAYOUTS
app.set("layout extractStyles", true);
app.set("layout extractScripts", true);

// SETTING PATHS FOR VIEWS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use("/", require("./routes"));

app.listen(port, (err) => {
  if (err) {
    console.log("Oops error in running the sever:", err);
    return;
  }
  console.log("🔥Firing up the Express server on: ", port, "🤙🏻");
});
