const express = require("express");

const router = express.Router();

console.log("Router Loaded");

router.get("/", (req, res) => {
  return res.send("fsadsa");
});

module.exports = router;
