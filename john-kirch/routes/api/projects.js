const express = require("express");
const router = express.Router();

router.get("/test", (req, res) => {
  res.send("You have reached the test page for Projects");
});

module.exports = router;
