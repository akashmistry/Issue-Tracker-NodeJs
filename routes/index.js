const express = require("express");

const router = express.Router();
const homeController = require("../controllers/home_controller");

console.log("Router Loaded");

// INDEX ROUTES

// HOME ROUTE AND ACTION
router.get("/", homeController.home);
// PROJECT ROUTE
router.use("/project", require("./project"));

module.exports = router;
