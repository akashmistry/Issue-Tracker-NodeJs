// REQUIRING THE MONGOOSE LIBRARY
const mongoose = require("mongoose");

// CONNECTION TO THE DATABASE
mongoose.connect("mongodb://localhost/issue_tracker");

// TO ACQUIRE THE CONNECTION (TO CHECK IF IT IS SUCCESSFUL)
const db = mongoose.connection;

// IF DATABASE CONNECTION HAS ERRORS
db.on("error", console.error.bind(console, "Error connecting to DataBase"));

// IF DATABASE IS RUNNING SUCCESSFULLY
db.once("open", () => {
  console.log("Successfully connected to the DataBase 🥞");
});

module.exports = db;
