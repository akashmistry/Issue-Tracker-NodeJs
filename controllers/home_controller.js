const Project = require("../models/project");

// FETCH ALL PROJECT FROM DB AND DISPLAY IN HOME
module.exports.home = async (req, res) => {
  try {
    const projects = await Project.find({}).sort("-createdAt");

    return res.render("home", {
      title: "Issue Tracker | Home",
      projects,
    });
  } catch (err) {
    console.log("Error in fetching the projects: ", err);
    return;
  }
};
