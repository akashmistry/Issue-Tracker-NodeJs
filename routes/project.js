const express = require("express");
const router = express.Router();
const projectController = require("../controllers/project_controller");

// CREATE PROJECT ROUTE AND ACTION
router.post("/create", projectController.create);
// PROJECT ID ROUTE AND ACTION
router.get("/:id", projectController.project);
// CREATE ISSUE FOR PROJECT ROUTE AND ACTION
router.post("/:id", projectController.createIssue);

module.exports = router;
