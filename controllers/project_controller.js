const Project = require("../models/project");
const Issue = require("../models/issue");
const { findById } = require("../models/project");

//CREATE PROJECT FOR USER ACTION
module.exports.create = async function (req, res) {
  try {
    Project.create({
      name: req.body.name,
      description: req.body.description,
      author: req.body.author,
    });
    return res.redirect("back");
  } catch (err) {
    console.log(err);
    return res.redirect("back");
  }
};

// FETCH PROJECT IN DB AND DISPLAY IN PROJECT PAGE
module.exports.project = async function (req, res) {
  try {
    let project = await Project.findById(req.params.id).populate({
      path: "issues",
    });
    if (project) {
      return res.render("project_page", {
        title: "Project Page",
        project,
      });
    }
    return res.redirect("back");
  } catch (err) {
    console.log(err);
    return res.redirect("back");
  }
};

// CREATE ISSUE FOR A PROJECT ID
module.exports.createIssue = async function (req, res) {
  try {
    let project = await Project.findById(req.params.id);
    if (project) {
      let issue = await Issue.create({
        title: req.body.title,
        description: req.body.description,
        labels: req.body.labels,
        author: req.body.author,
      });
      project.issues.push(issue);

      if (!(typeof req.body.labels === "string")) {
        for (let label of req.body.labels) {
          let isPresent = project.labels.find((obj) => obj == label);
          if (!isPresent) {
            project.labels.push(label);
          }
        }
      } else {
        let isPresent = project.labels.find((obj) => obj == req.body.labels);
        if (!isPresent) {
          project.labels.push(req.body.labels);
        }
      }
      await project.save();
      return res.redirect(`back`);
    } else {
      return res.redirect("back");
    }
  } catch (err) {
    return res.redirect("back");
  }
};
